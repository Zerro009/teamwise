from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import generics

from .permissions import *
from .serializers import *
from .models import *

class NewsList(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class ResumeList(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        resumes = Resume.objects.all()
        serializer = ResumeSerializer(resumes, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        serializer = ResumeSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        print(serializer.errors)
        return Response(serializer.errors, 400)

class ResumeDetail(APIView):
    permission_classes = (IsOwnerOrReadOnly,)

    def get(self, request, pk):
        try:
            resume = Resume.objects.get(id=pk)
        except Resume.DoesNotExist:
            return Response(status=404)
        else:
            serializer = ResumeSerializer(resume, context={'request': request})
            return Response(serializer.data)

    def patch(self, request, pk):
        try:
            resume = Resume.objects.get(id=pk)
        except Resume.DoesNotExist:
            return Response(status=404)
        else:
            serializer = ResumeSerializer(instance=resume, data=request.data, context={'request': request})
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
            serializer = ResumeSerializer(resume, context={'request': request})
            resume.delete()
            return Response(serializer.data)

class TeamList(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        teams = Team.objects.all()
        serializer = TeamSerializer(teams, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        serializer = TeamSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, 200)
        return Response(status=400)

class TeamDetail(APIView):
    permission_classes = (IsOwnerOrReadOnly,)

    def get(self, request, pk):
        try:
            team = Team.objects.get(id=pk)
        except Team.DoesNotExist:
            return Response(status=404)
        else:
            serializer = TeamSerializer(team, context={'request': request})
            return Response(serializer.data)
