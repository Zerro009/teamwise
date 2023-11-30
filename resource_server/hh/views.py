from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import generics

from .permissions import *

from .serializers import *
from .models import *

class ResumeList(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        resumes = Resume.objects.all()
        serializer = ResumeSerializer(resumes, many=True,)
        return Response(serializer.data)

    def post(self, request):
        serializer = ResumeSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, 400)
