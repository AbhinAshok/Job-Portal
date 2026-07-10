from django.shortcuts import render



from rest_framework import viewsets

from .models import Company
from .serializers import CompanySerializer

from accounts.permissions import IsRecruiter


class CompanyViewSet(
    viewsets.ModelViewSet
):

    serializer_class = CompanySerializer

    permission_classes = [
        IsRecruiter
    ]

    def get_queryset(self):

        return Company.objects.filter(
            owner=self.request.user
        )

    def perform_create(
        self,
        serializer
    ):
        serializer.save(
            owner=self.request.user
        )
