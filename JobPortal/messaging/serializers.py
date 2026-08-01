from rest_framework import serializers
from .models import Conversation, Message


class MessageSerializer(
    serializers.ModelSerializer
):

    sender_name = serializers.CharField(
        source="sender.full_name",
        read_only=True
    )

    class Meta:
        model = Message
        fields = "__all__"
        read_only_fields = ["sender", "conversation"]


class ConversationSerializer(
    serializers.ModelSerializer
):

    candidate_name = serializers.CharField(
        source="candidate.full_name",
        read_only=True
    )

    recruiter_name = serializers.CharField(
        source="recruiter.full_name",
        read_only=True
    )

    class Meta:
        model = Conversation
        fields = "__all__"
