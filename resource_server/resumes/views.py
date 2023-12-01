from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from .permissions import *
from .serializers import *
from .models import *

class ResumeList(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        resumes = Resume.objects.all()
        serializer = ResumeSerializer(resumes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ResumeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, 400)

class ResumeDetail(APIView):
    permission_classes = (IsOwnerOrReadOnly,)

    def get(self, request, pk):
        try:
            resume = Resume.objects.get(id=pk)
        except Resume.DoesNotExist:
            return Response(status=404)
        else:
            serializer = ResumeSerializer(resume)
            return Response(serializer.data)

    def patch(self, request, pk):
        try:
            resume = Resume.objects.get(id=pk)
        except Resume.DoesNotExist:
            return Response(status=404)
        else:
            serializer = ResumeSerializer(instance=resume, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, 400)

    def delete(self, request, pk):
        try:
            resume = Resume.objects.get(id=pk)
        except Resume.DoesNotExist:
            return Response(status=404)
        else:
            resume.delete()
            return Response()
