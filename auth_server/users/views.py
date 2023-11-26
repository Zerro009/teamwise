from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from django.conf import settings

import requests

from tokens.models import *
from tokens.authentication import *

from .serializers import *
from .models import *

class UserList(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        users = User.objects.all()
        result = []
        token = Token.objects.get(user=request.user)
        headers = {
            'Authorization':    '%s %s' % (token.token_type, token.access_token)
        }
        for user in users:
            url = '%susers/%d' % (settings.LEADERID_API, user.user_id)
            r = requests.get(url, headers=headers)
            if r.status_code != 200:
                continue
            result.append(r.json())
        return Response(result, content_type='application/json')

class UserDetail(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, pk):
        try:
            user = User.objects.get(user_id=pk)
        except User.DoesNotExist:
            return Response(status=404)
        else:
            url = '%susers/%d' % (settings.LEADERID_API, pk)
            token = Token.objects.get(user=request.user)
            headers = {
                'Authorization':    '%s %s' % (token.token_type, token.access_token)
            }
            r = requests.get(url, headers=headers)
            return Response(r.json(), r.status_code)

class UserMe(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        user_id = request.user.user_id
        token = Token.objects.get(user=request.user)
        url = '%susers/%d' % (settings.LEADERID_API, user_id)
        headers = {
            'Authorization':    '%s %s' % (token.token_type, token.access_token)
        }
        r = requests.get(url, headers=headers)
        return Response(r.json(), r.status_code)
