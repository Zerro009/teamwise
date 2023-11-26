from django.urls import re_path

from .views import *

urlpatterns = [
    re_path('', ProxyPass.as_view())
]
