from django.shortcuts import render

class ResumeUploadAPIView(
    APIView
):

    def post(self, request):

        file = request.FILES["resume"]

        text = parse_resume(file)

        skills = extract_skills(text)

        parsed = ParsedResume.objects.create(
            candidate=request.user,
            resume=file,
            extracted_text=text,
            extracted_skills=skills
        )

        return Response({
            "skills": skills
        })



