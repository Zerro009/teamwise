from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    user_id = models.BigAutoField(primary_key=True, unique=True,)
    username = None

    USERNAME_FIELD='user_id'

    def __str__(self):
        return 'User %d' % self.user_id
