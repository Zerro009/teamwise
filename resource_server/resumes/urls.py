from django.urls import path

from .views import *

urlpatterns = [
    path('', ResumeList.as_view()),
    path('<int:pk>/', ResumeDetail.as_view()),
]
