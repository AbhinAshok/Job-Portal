from rest_framework import serializers

from .models import (
    Application,
    RecruiterNote,
    ApplicationStatusHistory
)

class ApplicationSerializer(
    serializers.ModelSerializer
):

    candidate_name = serializers.CharField(
        source="candidate.full_name",
        read_only=True
    )

    job_title = serializers.CharField(
        source="job.title",
        read_only=True
    )

    class Meta:
        model = Application

        fields = "__all__"

        read_only_fields = (
            "candidate",
            "status",
            "match_score",
        )


class StatusUpdateSerializer(
    serializers.Serializer
):

    status = serializers.ChoiceField(
        choices=Application.STATUS_CHOICES
    )

    note = serializers.CharField(
        required=False
    )

