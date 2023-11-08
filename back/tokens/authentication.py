from rest_framework import authentication
from rest_framework import exceptions

from .models import Token

from users.models import User

class TokenAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        try:
            auth    = request.headers['Authorization'].split()[1].replace('"', '')
            token   = Token.objects.get(access_token=auth)
            user    = token.user
            if not user:
                return None
            if not token:
                return None
            return (user, token)
        except Exception:
            return None
