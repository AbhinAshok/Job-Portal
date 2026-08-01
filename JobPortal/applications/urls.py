from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    ApplyJobViewSet,
    CandidateApplicationViewSet,
    RecruiterApplicationsViewSet,
    UpdateApplicationStatusAPIView,
    RecruiterDashboardAPIView,
    ATSPipelineAPIView,
    CandidateDashboardAPIView,
    AddRecruiterNoteAPIView,
)

router = DefaultRouter()

router.register(
    "applications",
    ApplyJobViewSet,
    basename="applications"
)

urlpatterns = [

    path(
        "candidate-applications/",
        CandidateApplicationViewSet.as_view(
            {"get": "list"}
        )
    ),

    path(
        "recruiter-applications/",
        RecruiterApplicationsViewSet.as_view(
            {"get": "list"}
        )
    ),

    path(
        "applications/<int:pk>/status/",
        UpdateApplicationStatusAPIView.as_view()
    ),

    path(
        "applications/<int:pk>/notes/",
        AddRecruiterNoteAPIView.as_view()
    ),

    path(
        "dashboard/",
        RecruiterDashboardAPIView.as_view()
    ),

    path(
        "ats-pipeline/",
        ATSPipelineAPIView.as_view()
    ),

    path(
        "candidate-dashboard/",
        CandidateDashboardAPIView.as_view()
    ),

] + router.urls