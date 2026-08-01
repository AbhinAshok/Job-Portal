from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin
)

from .managers import UserManager


class CustomUser(
    AbstractBaseUser,
    PermissionsMixin
):

    ROLE_CHOICES = (
        ("candidate", "Candidate"),
        ("recruiter", "Recruiter"),
        ("admin", "Admin"),
    )

    email = models.EmailField(
        unique=True
    )

    full_name = models.CharField(
        max_length=255
    )

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES
    )

    is_active = models.BooleanField(
        default=True
    )

    is_staff = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    objects = UserManager()

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email



class CandidateProfile(models.Model):

    user = models.OneToOneField(
        CustomUser,
        on_delete=models.CASCADE,
        related_name="candidate_profile"
    )

    phone = models.CharField(
        max_length=20,
        blank=True
    )

    experience_years = models.PositiveIntegerField(
        default=0
    )

    skills = models.TextField(
        blank=True
    )

    current_location = models.CharField(
        max_length=255,
        blank=True
    )

    resume = models.FileField(
        upload_to="resumes/",
        blank=True,
        null=True
    )

    bio = models.TextField(
        blank=True
    )

    def __str__(self):
        return f"{self.user.email}'s profile"



class User(models.Model):
    name = models.CharField(max_length=200)
    phone= models.CharField(max_length=255)

    