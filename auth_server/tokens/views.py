from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from django.conf import settings

import requests

from users.serializers import *
from users.models import *

from .authentication import *
from .serializers import *
from .models import *

class TokenObtain(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        '''
            1. Front redirects to leader-id authentication page
            2. Authorization code is sent back to front
            3. Front sends authorization code to this endpoint
            4. Code is transfered for leader-id token
            5. Token is return back to front
        '''
        code = request.data.get('code', None)
        if not code:
            return Response(status=401)
        print(code)
        # Format from https://apps.leader-id.ru/swagger/
        data = {
            'client_id':        settings.CLIENT_ID,
            'client_secret':    settings.CLIENT_SECRET,
            'grant_type':       settings.GRANT_TYPE,
            'code':             code,
        }
        url = '%soauth/token' % settings.LEADERID_API
        r = requests.post(url, json=data)
        if r.status_code != 200:
            return Response(r.json(), r.status_code)
        '''
            Response data from leader-id
            contains:
                user_id
                access_token
                refresh_token
                user_validated
        '''
        response = r.json()
        user, created = User.objects.get_or_create(user_id=response['user_id'])
        token, created = Token.objects.get_or_create(
            user=user,
        )
        token.access_token = response['access_token']
        token.refresh_token = response['refresh_token']
        token.save()
        serializer = TokenSerializer(token)
        return Response(serializer.data, 200)

class TokenIntrospect(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)
