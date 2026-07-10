from rest_framework import serializers

from .models import (
    CustomUser,
    CandidateProfile
)

class RegisterSerializer(
    serializers.ModelSerializer
):

    password = serializers.CharField(
        write_only=True
    )

    class Meta:

        model = CustomUser

        fields = [
            "id",
            "email",
            "full_name",
            "role",
            "password",
        ]

    def create(self, validated_data):

        password = validated_data.pop(
            "password"
        )

        user = CustomUser.objects.create_user(
            password=password,
            **validated_data
        )

        return user


class CandidateProfileSerializer(
    serializers.ModelSerializer
):

    class Meta:

        model = CandidateProfile

        fields = "__all__"

        read_only_fields = [
            "user"
        ]


