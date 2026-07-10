from django.db import models

from JobPortal import settings

class Interview(models.Model):

    STATUS_CHOICES = (
        ("scheduled", "Scheduled"),
        ("completed", "Completed"),
        ("cancelled", "Cancelled"),
    )

    application = models.ForeignKey(
        "applications.Application",
        on_delete=models.CASCADE
    )

    recruiter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    scheduled_at = models.DateTimeField()

    meeting_link = models.URLField(
        blank=True
    )

    notes = models.TextField(
        blank=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="scheduled"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )


