from rest_framework import authentication

from users.models import *

import requests

class TokenAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get('Authorization', None)
        if not token:
            return None
        token = token.split()[1].replace('""', '')
        url = 'http://localhost:8001/tokens/introspect/'
        headers = {
            'Authorization':    request.headers['Authorization']
        }
        r = requests.post(url, headers=headers)

        if (r.status_code != 200):
            return None

        user = User(**r.json())
        return (user, token)        
