from django.urls import path
from . import views

# app_name = 'vue'

urlpatterns = [
    path('about', views.vue_app_main, name='example_vue_app'),
    path('experience', views.vue_app_experience, name='vue_app_experience'),
    path('projects', views.vue_app_projects, name='vue_app_projects'),
    path('contact', views.vue_app_contact, name='vue_app_contact'),
]
