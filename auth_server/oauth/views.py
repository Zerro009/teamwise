from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions

from tokens.authentication import *
from tokens.models import *

from users.serializers import *
from users.models import *

class TokenIntrospect(APIView):
    authentication_classes = (TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    
    def post(self, request, format=None):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data, 200)
