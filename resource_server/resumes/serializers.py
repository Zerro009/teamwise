from rest_framework import serializers

from .models import *

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Experience
        fields  = '__all__'

class RoleSerializer(serializers.ModelSerializer):
    experiences = ExperienceSerializer(many=True,)
    class Meta:
        model   = Role
        fields  = '__all__'

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Resume
        fields  = '__all__'
