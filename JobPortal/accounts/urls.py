from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from accounts.views import (
    RegisterAPIView,
    UserView,
    CandidateProfileAPIView
)

urlpatterns = [
    path("register/", RegisterAPIView.as_view()),
    path('users/', UserView.as_view()),
    path("login/", TokenObtainPairView.as_view()),
    path("refresh/", TokenRefreshView.as_view()),
    path("profile/", CandidateProfileAPIView.as_view()),
]