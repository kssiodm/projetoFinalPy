"""
URL configuration for projetofinalpy project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('home.urls')),
    path('', include('lancamentos.urls')),
    path('', include('popular.urls')),
    path('', include('listas.urls')),
    path('', include('pesquisa.urls')),
    path('', include('login.urls')),
    path('', include('cadastro.urls')),
    path('', include('contato.urls')),
    path('', include('faq.urls')),
    path('admin/', admin.site.urls),
]
