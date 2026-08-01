from django.db.models import Q

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import Conversation, Message
from .serializers import (
    ConversationSerializer,
    MessageSerializer
)


class ConversationListAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request):

        conversations = Conversation.objects.filter(
            Q(candidate=request.user) |
            Q(recruiter=request.user)
        )

        serializer = ConversationSerializer(
            conversations,
            many=True
        )

        return Response(
            serializer.data
        )


class MessageListAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request, conversation_id):

        messages = Message.objects.filter(
            conversation_id=conversation_id
        ).order_by("created_at")

        serializer = MessageSerializer(
            messages,
            many=True
        )

        return Response(
            serializer.data
        )


class SendMessageAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def post(self, request, conversation_id):

        serializer = MessageSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        serializer.save(
            sender=request.user,
            conversation_id=conversation_id
        )

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED
        )
