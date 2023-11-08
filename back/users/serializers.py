from rest_framework import serializers

from .models import *

class UserSerializer(serializers.ModelSerializer):
    request_user = serializers.SerializerMethodField()

    def get_request_user(self, obj):
        return obj == self.context['request'].user

    class Meta:
        model   = User
        fields  = ('uid', 'first_name', 'last_name', 'image', 'request_user')
