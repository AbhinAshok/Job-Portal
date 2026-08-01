from django.urls import path
from rest_framework.routers import DefaultRouter

from .views import (
    NotificationViewSet,
    MarkNotificationReadAPIView,
)

router = DefaultRouter()

router.register(
    "notifications",
    NotificationViewSet,
    basename="notifications"
)

urlpatterns = [
    path(
        "notifications/<int:pk>/read/",
        MarkNotificationReadAPIView.as_view()
    ),
] + router.urls
