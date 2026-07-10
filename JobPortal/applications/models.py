from django.db import models
from django.conf import settings

from jobs.models import Job


class Application(models.Model):

    STATUS_CHOICES = (
        ("applied", "Applied"),
        ("reviewing", "Reviewing"),
        ("shortlisted", "Shortlisted"),
        ("interview", "Interview"),
        ("offer", "Offer"),
        ("hired", "Hired"),
        ("rejected", "Rejected"),
        ("withdrawn", "Withdrawn"),
    )

    candidate = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="applications"
    )

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE,
        related_name="applications"
    )

    resume = models.FileField(
        upload_to="application_resumes/",
        blank=True,
        null=True
    )

    cover_letter = models.TextField(
        blank=True
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="applied"
    )

    match_score = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        default=0
    )

    applied_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        unique_together = (
            "candidate",
            "job"
        )

        ordering = [
            "-applied_at"
        ]

    def __str__(self):
        return f"{self.candidate.email} - {self.job.title}"


class ApplicationStatusHistory(models.Model):

    application = models.ForeignKey(
        Application,
        on_delete=models.CASCADE,
        related_name="status_history"
    )

    previous_status = models.CharField(
        max_length=50
    )

    new_status = models.CharField(
        max_length=50
    )

    changed_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        null=True
    )

    note = models.TextField(
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )


class RecruiterNote(models.Model):

    application = models.ForeignKey(
        Application,
        on_delete=models.CASCADE,
        related_name="notes"
    )

    recruiter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    note = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )


