from django.urls import path

from .views import (
    ScheduleInterviewAPIView,
    CandidateInterviewListAPIView,
)

urlpatterns = [
    path(
        "interviews/schedule/",
        ScheduleInterviewAPIView.as_view()
    ),
    path(
        "interviews/",
        CandidateInterviewListAPIView.as_view()
    ),
]
