from django.db.models.signals import post_save
from django.dispatch import receiver

from .models import (
    CustomUser,
    CandidateProfile
)


@receiver(post_save, sender=CustomUser)
def create_profile(sender, instance, created, **kwargs):

    if created and instance.role == "candidate":

        CandidateProfile.objects.create(
            user=instance
        )