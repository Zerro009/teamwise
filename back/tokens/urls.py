from django.urls import path

from .views import *

urlpatterns = [
    path('obtain/', ObtainToken.as_view()),
    path('destroy/', DestroyToken.as_view()),
]
