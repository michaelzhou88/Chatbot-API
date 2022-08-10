from rest_framework import serializers
from .models import ChatBot


class ChatSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChatBot
        fields = '__all__'
