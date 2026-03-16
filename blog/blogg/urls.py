from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'blogs', views.BlogViewSet, basename='blog')

urlpatterns = [
    path('', views.blog, name='blog'),
    path('api/', include(router.urls)),
]
