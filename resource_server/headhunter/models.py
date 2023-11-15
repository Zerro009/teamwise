from django.db import models

from users.models import *

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,)
    name = models.CharField(max_length=255,)
    description = models.TextField()
