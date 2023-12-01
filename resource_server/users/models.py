from django.contrib.auth.models import AnonymousUser, AbstractUser
from django.db import models

class User(AbstractUser):
    user_id = models.BigAutoField(primary_key=True, unique=True, blank=False, null=False,)

    def __str__(self):
        return 'User %d' % self.user_id
