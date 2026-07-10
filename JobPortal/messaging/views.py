from django.shortcuts import render

class SendMessageAPIView(
    APIView
):

    def post(self, request):

        serializer = MessageSerializer(
            data=request.data
        )

        serializer.is_valid(
            raise_exception=True
        )

        serializer.save(
            sender=request.user
        )

        return Response(
            serializer.data
        )

