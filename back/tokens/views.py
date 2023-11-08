from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from django.conf import settings

import requests
import json
import datetime

from .models import Token
from .authentication import TokenAuthentication
from users.models import User

class ObtainToken(APIView):
    '''
    Ebal ya rot etogo leader-id
    '''
    authentication_classes  = ()
    permission_classes      = (permissions.AllowAny,)

    def post(self, request, format=None):
        code = request.data.get('code', None)
        if code:
            # Structure described in Leader-id API Swagger
            data = {
                'client_id':        '15d19274-916e-445b-b145-11f60aa32859',
                'client_secret':    'AE5fKPPpV70QhonomfQvkKSsi9M4r1zQ',
                'grant_type':       'authorization_code',
                'code':             code
            }
            url = settings.LEADERID_API + 'oauth/token'
            # Requesting token with obtained code
            r = requests.post(url, json=data)
            if r.status_code != 200:
                # Returning bad response from leader-id
                return Response(r.json(), status=r.status_code)
            token_data = r.json()
            # Requesting user data
            url = settings.LEADERID_API + 'users/%s' % (token_data['user_id'])
            headers = {
                'Authorization': 'Bearer ' + token_data['access_token']
            }
            r = requests.get(url, headers=headers)
            user_data = r.json()
            image = user_data.get('photo', None) and user_data['photo']['thumbs']['180']
            # Creating new user with provided credentials, or get one already created
            user, created = User.objects.get_or_create(
                    uid=token_data['user_id'],
                    first_name=user_data['firstName'],
                    last_name=user_data['lastName'],
                    image=image
            )
            token = Token.objects.create(
                user=user,
                access_token=token_data['access_token'],
                refresh_token=token_data['refresh_token'],
#               expires=datetime.date(2023, 12, 31)
            )
            result = {
                'token':    token.access_token,
                'status':     '200'
            }
            # Returning token nicely
            return Response(result, status=200)
        else:
            # Code wasn't received
            data = {
                'message':  'No authorization code was provided',
                'status':     '400'
            }
            return Response(data, status=400)

class DestroyToken(APIView):
    authentication_classes  = (TokenAuthentication,)
    permission_classes      = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        token = Token.objects.get(token=request.auth)
        token.delete()
        data = {
            'message':  'Token was destroyed successfully',
            'status':     '200'
        }
        return Response(data, status=200)
