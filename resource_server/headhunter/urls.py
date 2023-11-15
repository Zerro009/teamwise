from django.urls import path

from .views import *

urlpatterns = [
    path('resume/', ResumeList.as_view())
]
