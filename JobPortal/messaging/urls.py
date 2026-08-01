from django.urls import path

from .views import (
    ConversationListAPIView,
    MessageListAPIView,
    SendMessageAPIView,
)

urlpatterns = [
    path(
        "conversations/",
        ConversationListAPIView.as_view()
    ),
    path(
        "conversations/<int:conversation_id>/messages/",
        MessageListAPIView.as_view()
    ),
    path(
        "conversations/<int:conversation_id>/send/",
        SendMessageAPIView.as_view()
    ),
]
