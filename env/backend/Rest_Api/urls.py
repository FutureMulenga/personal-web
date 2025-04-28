from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
     #Client urls
     path('', views.Home, name='home'),
     path('about/', views.About, name='about'),
     path('resume/', views.Resume, name="resume"),
     path('contact/', views.Contact, name="contact"),
     path('service/', views.Services, name='service'),

     #Admin urls
     path('home_admin/', views.HomeAdmin, name='home_admin'),

     path('admin/', admin.site.urls),
]