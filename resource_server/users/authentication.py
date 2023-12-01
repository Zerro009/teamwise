from rest_framework import authentication

from .models import *
from resumes.models import *

import requests
import os

class TokenAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        token = request.headers.get('Authorization', None)
        if not token:
            return None
        token = token.split()[1].replace('""', '')
        url = 'http://%s:%s/tokens/introspect/' % (os.getenv('AUTH_SERVER_HOST'), os.getenv('AUTH_SERVER_PORT'))
        headers = {
            'Authorization':    request.headers['Authorization']
        }
        r = requests.post(url, headers=headers)

        if (r.status_code != 200):
            return None

        user, created = User.objects.get_or_create(**r.json())
        if created:
            Role.objects.init_roles(user)

        return (user, token)        
