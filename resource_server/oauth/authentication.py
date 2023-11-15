from rest_framework import authentication

from users.models import *

import requests

class OAuthAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        try:
            token = request.headers['Authorization']
            url = 'http://localhost:8001/oauth/introspect/'
            r = requests.post(url, headers={'Authorization': token})
            if (r.status_code != 200):
                return None
            data = r.json()
            user, created = User.objects.get_or_create(uid=data['uid'])
            auth = token.split()[1].replace('""', '')
            return (user, auth)
        except Exception as e:
            print(e)
            return None
