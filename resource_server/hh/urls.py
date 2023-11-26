from django.urls import path

from .views import *

urlpatterns = [
    path('news/', NewsList.as_view()),
    path('news/<int:pk>/', NewsDetail.as_view()),
    path('resume/', ResumeList.as_view()),
    path('resume/<int:pk>/', ResumeDetail.as_view()),
]
