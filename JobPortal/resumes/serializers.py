from rest_framework import serializers
from .models import ParsedResume


class ParsedResumeSerializer(
    serializers.ModelSerializer
):

    class Meta:
        model = ParsedResume
        fields = "__all__"
        read_only_fields = [
            "candidate",
            "extracted_text",
            "extracted_skills"
        ]
