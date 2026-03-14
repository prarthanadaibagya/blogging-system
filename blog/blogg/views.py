from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import Post
from .serializers import PostSerializer
from .permissions import IsAuthor

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

    def get_permissions(self):
        if self.action in ['update','partial_update','destroy']:
            return [permissions.IsAuthenticated(), IsAuthor()]
        return [permissions.IsAuthenticated()]
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)