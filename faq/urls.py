from django.urls import path
from faq import views 

# app_name = 'faq'

urlpatterns = [
    path('faq/', views.faq, name= 'faq'),
]