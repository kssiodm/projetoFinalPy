from django.urls import path
from listas import views 

# app_name = 'listas'

urlpatterns = [
    path('listas/', views.listas, name= 'listas'),
]