from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import *
from .models import *

import re

class ServiceList(APIView):
    def get(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)

    def post(self, request):
        request.data['ipv4'] = request.META['REMOTE_ADDR']
        try:
            name = request.data.get('name', None)
            service = Service.objects.get(name=name)
        except Service.DoesNotExist:
            serializer = ServiceSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, 201)
            return Response(serializer.errors, 400)
        else:
            serializer = ServiceSerializer(instance=service, data=request.data)
            if serializer.is_valid():
                return Response(serializer.data, 200)
            return Response(serializer.errors, 400)

class ServiceDetail(APIView):
    def get(self, request):
        path = request.path[1:]
        routes = Route.objects.all()
        for route in routes:
            pattern = re.compile(route.value)
            if pattern.match(path):
                service = route.service
                serializer = ServiceSerializer(service)
                return Response(serializer.data)
        return Response(status=404)
            
