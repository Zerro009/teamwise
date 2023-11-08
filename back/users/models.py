from django.contrib.auth.models import AbstractBaseUser, UserManager as AbstractUserManager, PermissionsMixin
from django.db import models
from django.utils import timezone

class UserManager(AbstractUserManager):
    def create_user(self, uid, password=None, is_active=True, is_staff=False, is_admin=False):
        if not uid:
            raise ValueError('Users must have an uid')
        user = self.model(
            uid
        )
        user.set_password(password)
        user.is_active  = is_active
        user.is_staff   = is_staff
        user.is_admin   = is_admin
        user.save(using=self._db)
        return user

    def create_superuser(self, uid, password):

        user = self.create_user(
            uid,
            password
        )
        user.is_active      = True
        user.is_staff       = True
        user.is_superuser   = True
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    uid             = models.BigAutoField(primary_key=True, unique=True)
    is_active       = models.BooleanField(default=False)
    is_staff        = models.BooleanField(default=False)
    is_active       = models.BooleanField(default=False)
    is_superuser    = models.BooleanField(default=False)
    first_name      = models.CharField(max_length=255)
    last_name       = models.CharField(max_length=255)
    image           = models.CharField(max_length=1024, null=True, blank=True)
    USERNAME_FIELD  = 'uid'

    objects = UserManager()

    def __str__(self):
        return 'User №%s' % (self.uid)
