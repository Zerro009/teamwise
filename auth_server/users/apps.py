from django.apps import AppConfig
from django.urls import get_resolver

import requests
import os

class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'

    def ready(self):
        url = 'http://%s:%s/services/' % (os.getenv('REGISTRY_SERVER_HOST'), os.getenv('REGISTRY_SERVER_PORT'))
        data = {
            'name':     self.name,
            'port':     os.getenv('AUTH_SERVER_PORT'),
            'routes':   []
        }
        urls = get_resolver().reverse_dict.values()
        for i in urls:
            route = {'value': i[0][0][0]}
            data['routes'].append(route)
        r = requests.post(url, json=data)
