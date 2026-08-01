from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from .models import ParsedResume


def parse_resume(file):
    """Stub: extract text from resume file.
    TODO: integrate a real parser (e.g. PyPDF2, docx).
    """
    try:
        return file.read().decode("utf-8", errors="ignore")
    except Exception:
        return ""


def extract_skills(text):
    """Stub: extract skills from resume text.
    TODO: integrate NLP-based skill extraction.
    """
    common_skills = [
        "python", "javascript", "react", "django",
        "java", "html", "css", "sql", "git",
        "node", "typescript", "docker", "aws",
        "mongodb", "postgresql", "rest", "api",
    ]
    text_lower = text.lower()
    found = [
        skill for skill in common_skills
        if skill in text_lower
    ]
    return found


class ResumeUploadAPIView(
    APIView
):

    permission_classes = [
        IsAuthenticated
    ]

    def post(self, request):

        if "resume" not in request.FILES:
            return Response(
                {"detail": "No resume file provided"},
                status=status.HTTP_400_BAD_REQUEST
            )

        file = request.FILES["resume"]

        text = parse_resume(file)
        skills = extract_skills(text)

        file.seek(0)

        parsed = ParsedResume.objects.create(
            candidate=request.user,
            resume=file,
            extracted_text=text,
            extracted_skills=skills
        )

        return Response({
            "id": parsed.id,
            "skills": skills
        }, status=status.HTTP_201_CREATED)
