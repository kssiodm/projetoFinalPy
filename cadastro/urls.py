from django.urls import path
from cadastro import views 

# app_name = 'cadastro'

urlpatterns = [
    path('cadastro/', views.cadastro, name= 'cadastro'),
]