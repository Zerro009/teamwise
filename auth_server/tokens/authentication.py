from rest_framework.authentication import BaseAuthentication

from users.models import *
from tokens.models import *

class TokenAuthentication(BaseAuthentication):
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
        except Token.DoesNotExist:
            return None
        except Exception:
            return None
