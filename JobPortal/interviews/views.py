from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from accounts.permissions import IsRecruiter
from notifications.models import Notification

from .models import Interview
from .serializers import InterviewSerializer


class ScheduleInterviewAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated,
        IsRecruiter
    ]

    def post(self, request):

        serializer = InterviewSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        interview = serializer.save(
            recruiter=request.user
        )

        Notification.objects.create(
            recipient=interview.application.candidate,
            title="Interview Scheduled",
            message=f"You have an interview for {interview.application.job.title}",
            notification_type="interview"
        )

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )


class CandidateInterviewListAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        interviews = Interview.objects.filter(
            application__candidate=request.user
        ).select_related(
            "application__job",
            "application__candidate"
        )

        serializer = InterviewSerializer(
            interviews,
            many=True
        )

        return Response(
            serializer.data
        )
