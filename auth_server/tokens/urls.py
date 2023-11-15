from django.urls import path

from .views import *

urlpatterns = [
        path('obtain/', TokenObtain.as_view()),
]
