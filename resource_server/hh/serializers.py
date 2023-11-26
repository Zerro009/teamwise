from rest_framework import serializers

from .models import *

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model   = News
        fields  = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Resume
        fields  = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Team
        fields  = '__all__'
