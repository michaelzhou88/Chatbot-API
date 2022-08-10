from django.shortcuts import render
from rest_framework import viewsets
from .models import ChatBot
from .serializers import ChatSerializer


class ChatViewSet(viewsets.ModelViewSet):
    queryset = ChatBot.objects.all()
    serializer_class = ChatSerializer
