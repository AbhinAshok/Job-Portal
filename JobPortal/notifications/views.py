from django.shortcuts import render
from .serializers import NotificationSerializer

class NotificationViewSet(
    viewsets.ReadOnlyModelViewSet
):

    serializer_class = NotificationSerializer

    def get_queryset(self):

        return Notification.objects.filter(
            recipient=self.request.user
        )


class MarkNotificationReadAPIView(
    APIView
):

    def patch(self, request, pk):

        notification = Notification.objects.get(
            pk=pk,
            recipient=request.user
        )

        notification.is_read = True
        notification.save()

        return Response({
            "message": "Notification marked as read"
        })


