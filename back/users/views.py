from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from .models import *
from .serializers import *

from tokens.authentication import TokenAuthentication

class UserList(APIView):
    authentication_classes  = (TokenAuthentication,)
    permission_classes      = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True, context={'request': request})
        return Response(serializer.data, status=200)

class UserDetail(APIView):
    authentication_classes  = (TokenAuthentication,)
    permission_classes      = (permissions.IsAuthenticated,)

    def get(self, request, pk, format=None):
        try:
            user = User.objects.get(uid=pk)
            serializer = UserSerializer(user, context={'request': request})
            return Response(serializer.data, status=200)
        except User.DoesNotExist:
            return Response(status=404)

class UserMe(APIView):
    authentication_classes  = (TokenAuthentication,)
    permission_classes      = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        user = request.user
        serializer = UserSerializer(user, context={'request': request})
        return Response(serializer.data, status=200)

class UserCount(APIView):
    authentication_classes  = (TokenAuthentication,)
    permission_classes      = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        count = len(User.objects.all())
        data = {
            'value':    count
        }
        return Response(data, status=200)
