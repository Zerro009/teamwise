from rest_framework import serializers

from .models import *

class RouteSerializer(serializers.ModelSerializer):
    class Meta:
        model   = Route
        fields  = ('value',)

class ServiceSerializer(serializers.ModelSerializer):
    routes = RouteSerializer(many=True)

    def create(self, validated_data):
        routes = validated_data.pop('routes')
        service = Service(**validated_data)
        service.save()
        for route in routes:
            route['service'] = service
            Route(**route).save()
        return service

    class Meta:
        model   = Service
        fields  = ('name', 'ipv4', 'port', 'routes')
