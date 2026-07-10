from rest_framework import serializers

from .models import (
    Job,
    Skill,
    JobCategory
)



class SkillSerializer(
    serializers.ModelSerializer
):

    class Meta:
        model = Skill
        fields = "__all__"


class JobCategorySerializer(
    serializers.ModelSerializer
):

    class Meta:
        model = JobCategory
        fields = "__all__"


class JobSerializer(
    serializers.ModelSerializer
):

    company_name = serializers.CharField(
        source="company.name",
        read_only=True
    )

    class Meta:

        model = Job

        fields = "__all__"

        read_only_fields = [
            "recruiter"
        ]

