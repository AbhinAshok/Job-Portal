from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

from accounts.permissions import IsCandidate, IsRecruiter
from interviews.models import Interview
from jobs.models import SavedJob, Job

from .models import (
    Application,
    ApplicationStatusHistory,
    RecruiterNote
)
from .serializers import (
    ApplicationSerializer,
    StatusUpdateSerializer
)
from .services import calculate_match_score

from accounts.models import CandidateProfile


class ApplyJobViewSet(
    viewsets.ModelViewSet
):

    serializer_class = ApplicationSerializer

    permission_classes = [
        IsAuthenticated,
        IsCandidate
    ]

    http_method_names = [
        'get', 'post', 'head', 'options'
    ]

    def get_queryset(self):

        return Application.objects.filter(
            candidate=self.request.user
        )

    def perform_create(
        self,
        serializer
    ):

        job = serializer.validated_data["job"]

        profile = CandidateProfile.objects.get(
            user=self.request.user
        )

        required_skills = job.skills.values_list(
            "name",
            flat=True
        )

        score = calculate_match_score(
            profile.skills,
            required_skills
        )

        serializer.save(
            candidate=self.request.user,
            match_score=score
        )


class CandidateApplicationViewSet(
    viewsets.ReadOnlyModelViewSet
):

    serializer_class = ApplicationSerializer

    permission_classes = [
        IsAuthenticated
    ]

    def get_queryset(self):

        return Application.objects.filter(
            candidate=self.request.user
        )


class RecruiterApplicationsViewSet(
    viewsets.ReadOnlyModelViewSet
):

    serializer_class = ApplicationSerializer

    permission_classes = [
        IsAuthenticated,
        IsRecruiter
    ]

    def get_queryset(self):

        return Application.objects.filter(
            job__recruiter=self.request.user
        )


class UpdateApplicationStatusAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated,
        IsRecruiter
    ]

    def patch(
        self,
        request,
        pk
    ):

        application = get_object_or_404(
            Application,
            pk=pk
        )

        old_status = application.status

        serializer = StatusUpdateSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        application.status = serializer.validated_data[
            "status"
        ]

        application.save()

        ApplicationStatusHistory.objects.create(
            application=application,
            previous_status=old_status,
            new_status=application.status,
            changed_by=request.user,
            note=serializer.validated_data.get(
                "note",
                ""
            )
        )

        return Response({
            "message": "Status updated"
        })


class RecruiterDashboardAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated,
        IsRecruiter
    ]

    def get(
        self,
        request
    ):

        jobs_count = Job.objects.filter(
            recruiter=request.user
        ).count()

        applications_count = Application.objects.filter(
            job__recruiter=request.user
        ).count()

        hired_count = Application.objects.filter(
            job__recruiter=request.user,
            status="hired"
        ).count()

        return Response({
            "jobs": jobs_count,
            "applications": applications_count,
            "hired": hired_count
        })


class ATSPipelineAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated,
        IsRecruiter
    ]

    def get(
        self,
        request
    ):

        data = {}

        statuses = [
            "applied",
            "reviewing",
            "shortlisted",
            "interview",
            "offer",
            "hired",
            "rejected"
        ]

        for status_name in statuses:

            applications = Application.objects.filter(
                job__recruiter=request.user,
                status=status_name
            )

            data[status_name] = ApplicationSerializer(
                applications,
                many=True
            ).data

        return Response(data)


class CandidateDashboardAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        return Response({

            "applications":
                Application.objects.filter(
                    candidate=request.user
                ).count(),

            "saved_jobs":
                SavedJob.objects.filter(
                    user=request.user
                ).count(),

            "interviews":
                Interview.objects.filter(
                    application__candidate=request.user
                ).count(),
        })


class AddRecruiterNoteAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated,
        IsRecruiter
    ]

    def post(self, request, pk):

        application = get_object_or_404(
            Application,
            pk=pk
        )

        note_text = request.data.get("note", "")

        if not note_text:
            return Response(
                {"detail": "Note is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        RecruiterNote.objects.create(
            application=application,
            recruiter=request.user,
            note=note_text
        )

        return Response(
            {"message": "Note added"},
            status=status.HTTP_201_CREATED
        )
