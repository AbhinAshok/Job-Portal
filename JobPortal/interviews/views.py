from django.shortcuts import render

class ScheduleInterviewAPIView(
    APIView
):

    permission_classes = [
        IsRecruiter
    ]

    def post(self, request):

        serializer = InterviewSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        interview = serializer.save(
            recruiter=request.user
        )

        Notification.objects.create(
            recipient=interview.application.candidate,
            title="Interview Scheduled",
            message=f"You have an interview for {interview.application.job.title}"
        )

        return Response(
            serializer.data
        )

