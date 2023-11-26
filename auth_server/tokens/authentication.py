from rest_framework.authentication import BaseAuthentication

from users.models import *
from tokens.models import *

class TokenAuthentication(BaseAuthentication):
    def authenticate(self, request):
        try:
            auth    = request.headers.get('Authorization', None)
            if not auth:
                return None
            auth = auth.split()[1].replace('"', '')
            token   = Token.objects.get(access_token=auth)
            user    = token.user
            return (user, token)
        except Token.DoesNotExist as error:
            print(error)
            return None
