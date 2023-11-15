from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from tokens.models import *

from .serializers import *
from .models import *
from .authentication import *

import requests

class TokenObtain(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.AllowAny,)

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
            data = r.json()
            user, created  = User.objects.get_or_create(uid=data['user_id'])
            token = Token.objects.create(
                user=user,
                access_token=data['access_token'],
                refresh_token=data['refresh_token']
            )
            serializer = TokenSerializer(token)
            return Response(serializer.data, 200)
        return Response(status=400)
