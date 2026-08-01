from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import CustomUser

from .serializers import (
    RegisterSerializer,
    CandidateProfileSerializer
)


class RegisterAPIView(generics.CreateAPIView):

    serializer_class = RegisterSerializer
    permission_classes = []


class UserView(APIView):

    def get(self, request):
        user = CustomUser.objects.all()
        serializer = RegisterSerializer(user, many=True)
        return Response(serializer.data)


class CandidateProfileAPIView(
    APIView
):

    def get(
        self,
        request
    ):
        try:
            profile = request.user.candidate_profile
        except Exception:
            return Response(
                {"detail": "Profile not found"},
                status=404
            )

        serializer = CandidateProfileSerializer(
            profile
        )

        return Response(
            serializer.data
        )

    def put(
        self,
        request
    ):
        try:
            profile = request.user.candidate_profile
        except Exception:
            return Response(
                {"detail": "Profile not found"},
                status=404
            )

        serializer = CandidateProfileSerializer(
            profile,
            data=request.data,
            partial=True
        )

        serializer.is_valid(
            raise_exception=True
        )

        serializer.save()

        return Response(
            serializer.data
        )