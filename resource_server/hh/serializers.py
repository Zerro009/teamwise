from rest_framework import serializers

from .models import *

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model   = News
        fields  = '__all__'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Experience
        fields  = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    related_experience = ExperienceSerializer(many=True,)

    class Meta:
        model   = Resume
        fields  = '__all__'
