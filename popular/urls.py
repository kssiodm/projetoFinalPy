from django.urls import path
from popular import views 

# app_name = 'popular'

urlpatterns = [
    path('popular/', views.popular, name= 'popular'),
]