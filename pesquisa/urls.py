from django.urls import path
from pesquisa import views 


# app_name = 'pesquisa'

urlpatterns = [
    path('', views.pesquisa, name= 'pesquisa'),
]