from django.apps import AppConfig
from django.urls import get_resolver

class ProxyConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'proxy'
