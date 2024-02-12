from django.urls import path
# from pesquisa import views 
from .views import pesquisa_view

urlpatterns = [
    path('pesquisa/', pesquisa_view, name='pesquisa_view'),
]


# app_name = 'pesquisa'

# urlpatterns = [
#     path('', views.pesquisa, name= 'pesquisa'),
# ]