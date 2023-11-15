from django.conf import settings
from django.db import models

class Token(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    access_token = models.CharField(max_length=1024, blank=False, null=False,)
    refresh_token = models.CharField(max_length=1024, blank=False, null=False,)
    token_type = models.CharField(max_length=255, blank=True, default='Bearer')
