from rest_framework import serializers

from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model   = User
        fields  = ('user_id', 'username', 'avatar', 'cover',)
