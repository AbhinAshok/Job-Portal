from django.urls import path

from .views import ResumeUploadAPIView

urlpatterns = [
    path(
        "resumes/upload/",
        ResumeUploadAPIView.as_view()
    ),
]
