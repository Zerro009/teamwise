from django.db import models

from users.models import *

class Token(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    access_token = models.CharField(max_length=1024,)
    refresh_token = models.CharField(max_length=1024,)
    
    @property
    def token_type(self):
        return 'Bearer'
