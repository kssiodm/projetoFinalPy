from django.urls import path
from contato import views 

# app_name = 'contato'

urlpatterns = [
    path('contato/', views.contato, name= 'contato'),
]