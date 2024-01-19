
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .import views

urlpatterns = [
    path('base/', views.BASE ,name='base'),
    path('patient/add', views.ADD_PATIENT, name='add_patient'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

