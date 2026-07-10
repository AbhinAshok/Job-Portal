from django.db import models

from JobPortal import settings

class ParsedResume(models.Model):

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    resume = models.FileField(
        upload_to="resumes/"
    )

    extracted_text = models.TextField()

    extracted_skills = models.JSONField(
        default=list
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )


