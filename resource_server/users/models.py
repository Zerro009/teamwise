from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    uid             = models.BigAutoField(primary_key=True, unique=True)
    def __str__(self):
        return 'User №%s' % (self.uid)
