from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    JobViewSet,
    SaveJobAPIView,
    SavedJobListAPIView
)

router = DefaultRouter()

router.register(
    "jobs",
    JobViewSet,
    basename="jobs"
)

urlpatterns = [
    path(
        "jobs/<int:job_id>/save/",
        SaveJobAPIView.as_view()
    ),
    path(
        "saved-jobs/",
        SavedJobListAPIView.as_view()
    ),
] + router.urls