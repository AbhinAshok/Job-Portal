from django.shortcuts import render

from django_filters.rest_framework import DjangoFilterBackend

from rest_framework import filters
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Job, SavedJob
from .filters import JobFilter
from .serializers import JobSerializer


class JobViewSet(
    viewsets.ModelViewSet
):

    serializer_class = JobSerializer

    filter_backends = [
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    ]

    filterset_class = JobFilter

    search_fields = [
        "title",
        "description",
        "location",
    ]

    ordering_fields = [
        "created_at",
        "salary_min",
        "salary_max",
    ]

    def get_queryset(self):

        queryset = Job.objects.filter(
            is_active=True
        )

        recruiter_jobs = self.request.query_params.get(
            "my_jobs"
        )

        if recruiter_jobs:
            queryset = queryset.filter(
                recruiter=self.request.user
            )

        return queryset

    def perform_create(
        self,
        serializer
    ):

        serializer.save(
            recruiter=self.request.user
        )
    


class SaveJobAPIView(
    APIView
):

    def post(
        self,
        request,
        job_id
    ):

        SavedJob.objects.get_or_create(
            user=request.user,
            job_id=job_id
        )

        return Response({
            "message": "Job saved"
        })