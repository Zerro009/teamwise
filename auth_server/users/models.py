from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    user_id = models.BigAutoField(primary_key=True, unique=True,)
    username = models.CharField(max_length=255, unique=True, null=True,)
    avatar = models.ImageField(blank=True,null=True,)
    cover = models.ImageField(blank=True, null=True,)

    USERNAME_FIELD='user_id'

    def __str__(self):
        return 'User %d' % self.user_id
