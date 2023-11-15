from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from oauth.authentication import OAuthAuthentication

from .models import *
from .serializers import *

class ResumeList(APIView):
    authentication_classes = (OAuthAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        return Response()
