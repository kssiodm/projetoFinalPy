from django.urls import path
from titulo import views 

# app_name = 'titulo'

urlpatterns = [
    path('titulo/', views.titulo, name='titulo'),
]

