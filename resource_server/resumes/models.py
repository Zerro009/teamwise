from django.db import models

from users.models import *

ROLE_CHOICES = [
    ('PJM', 'Project manager'),
    ('PDM', 'Product manager'),
    ('A',   'Architect'),
    ('TML', 'Team lead'),
    ('THL', 'Tech lead'),
    ('FF',  'Fullstack'),
    ('F',   'Frontend'),
    ('B',   'Backend'),
    ('D',   'Designer'),
    ('ML',  'Machine learning'),
    ('DA',  'Data analyst'),
    ('DS',  'Data Scientist'),
    ('DO',  'DevOps'),
    ('P',   'Pentenster'),
    ('O',   'Other'),
]

class RoleManager(models.Manager):
    def init_roles(self, user):
        for i in range(len(ROLE_CHOICES)):
            role = self.create(user=user, name=ROLE_CHOICES[i][0])

    def roles(self, user):
        return self.filter(user=user)

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255,)
    description = models.TextField(blank=True, null=True,)
    github = models.CharField(max_length=255, blank=True, null=True,)
    headhunter = models.CharField(max_length=255, blank=True, null=True,)

class Role(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, choices=ROLE_CHOICES)

    objects = RoleManager()

    __ROLE_DESCRIPTION = {
        'PJM':  'Project manager description',
        'PDM':  'Product manager description',
        'A':    'Architect description',
        'TML':  'Team lead description',
        'THL':  'Tech lead description',
        'FF':   'Fullstack description',
        'F':    'Frontend description',
        'B':    'Backend description',
        'D':    'Designer description',
        'ML':   'Machine learning description',
        'DS':   'Data scientist description',
        'DA':   'Data analyst description',
        'DO':   'DevOps description',
        'P':    'Pentester description',
        'O':    'Other description',
    }

    @property
    def description(self):
        return self.__ROLE_DESCRIPTION[self.name]

    class Meta:
        unique_together = ('user', 'name',)

class Experience(models.Model):
    role = models.ForeignKey(Role, on_delete=models.CASCADE, related_name='experiences',)
    value = models.IntegerField(default=0,)
