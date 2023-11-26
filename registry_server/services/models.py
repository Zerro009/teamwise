from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=255, unique=True,)
    ipv4 = models.CharField(max_length=255,)
    port = models.CharField(max_length=255,)

class Route(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='routes')
    value = models.CharField(max_length=255,)
