from django.urls import path
from .import views

urlpatterns = [
    path('about/',views.home),
    path('',views.index)
]