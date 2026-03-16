from django.shortcuts import render
from rest_framework import permissions, viewsets
from .models import Post
from .serializers import PostSerializer
from .permissions import IsAuthor

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-created_at')
    serializer_class = PostSerializer

    def get_permissions(self):
        # Anyone can view the list/detail of blogs.
        # Authentication is required for creating/editing/deleting.
        if self.action in ['update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated(), IsAuthor()]
        if self.action == 'create':
            return [permissions.IsAuthenticated()]
        return [permissions.AllowAny()]
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

def blog(request):
    return render(request, "blog.html")