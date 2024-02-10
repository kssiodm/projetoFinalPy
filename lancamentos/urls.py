from django.urls import path
from lancamentos import views 

# app_name = 'lancamentos'

urlpatterns = [
    path('lancamentos/', views.lancamentos, name= 'lancamentos'),
]