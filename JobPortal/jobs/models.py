from django.db import models
from django.conf import settings
from companies.models import Company


class Skill(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True
    )

    def __str__(self):
        return self.name


class JobCategory(models.Model):
    name = models.CharField(
        max_length=100,
        unique=True
    )

    def __str__(self):
        return self.name


class Job(models.Model):

    JOB_TYPES = (
        ("full_time", "Full Time"),
        ("part_time", "Part Time"),
        ("contract", "Contract"),
        ("internship", "Internship"),
        ("remote", "Remote"),
    )

    EXPERIENCE_LEVELS = (
        ("fresher", "Fresher"),
        ("junior", "Junior"),
        ("mid", "Mid"),
        ("senior", "Senior"),
    )

    company = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        related_name="jobs"
    )

    recruiter = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="posted_jobs"
    )

    title = models.CharField(max_length=255)

    description = models.TextField()

    requirements = models.TextField()

    category = models.ForeignKey(
        JobCategory,
        on_delete=models.SET_NULL,
        null=True
    )

    skills = models.ManyToManyField(
        Skill,
        blank=True
    )

    location = models.CharField(
        max_length=255
    )

    salary_min = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True
    )

    salary_max = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True
    )

    job_type = models.CharField(
        max_length=20,
        choices=JOB_TYPES
    )

    experience_level = models.CharField(
        max_length=20,
        choices=EXPERIENCE_LEVELS
    )

    vacancies = models.PositiveIntegerField(
        default=1
    )

    is_active = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title



class SavedJob(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE
    )

    saved_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        unique_together = (
            "user",
            "job"
        )




