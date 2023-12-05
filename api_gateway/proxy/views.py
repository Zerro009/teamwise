from rest_framework.views import APIView
from rest_framework.response import Response

import requests
import os

import json

class ProxyPass(APIView):
    def get(self, request):
        path = request.path
        url = 'http://%s:%s%s' % (os.getenv('REGISTRY_SERVER_HOST'), os.getenv('REGISTRY_SERVER_PORT'), path)
        r = requests.get(url)
        if r.status_code != 200:
            return Response(status=r.status_code)
        service = r.json()
        url = 'http://%s:%s%s' % (service['ipv4'], service['port'], path,)
        headers = {
            'Content-Type':     'application/json',
            'Authorization':    request.headers.get('Authorization', '')
        }
        r = requests.get(url, headers=headers, json=request.data)
        try:
            return Response(r.json(), status=r.status_code)
        except Exception as error:
            print(error)
            return Response(status=r.status_code)

    def post(self, request):
        path = request.path
        url = 'http://%s:%s%s' % (os.getenv('REGISTRY_SERVER_HOST'), os.getenv('REGISTRY_SERVER_PORT'), path)
        r = requests.get(url)
        if r.status_code != 200:
            return Response(status=r.status_code)
        service = r.json()
        url = 'http://%s:%s%s' % (service['ipv4'], service['port'], path)
        headers = {
            'Content-Type':     'application/json',
            'Authorization':    request.headers.get('Authorization', '')
        }
        r = requests.post(url, headers=headers, json=request.data)
        try:
            return Response(r.json(), status=r.status_code)
        except Exception as error:
            print(error)
            return Response(status=r.status_code)

    def patch(self, request):
        path = request.path
        url = 'http://%s:%s%s' % (os.getenv('REGISTRY_SERVER_HOST'), os.getenv('REGISTRY_SERVER_PORT'), path)
        r = requests.get(url)
        if r.status_code != 200:
            return Response(status=r.status_code)
        service = r.json()
        url = 'http://%s:%s%s' % (service['ipv4'], service['port'], path)
        headers = {
            'Content-Type':     'application/json',
            'Authorization':    request.headers.get('Authorization', '')
        }
        r = requests.patch(url, headers=headers, json=request.data)
        try:
            return Response(r.json(), status=r.status_code)
        except Exception as error:
            print(error)
            return Response(status=r.status_code)
