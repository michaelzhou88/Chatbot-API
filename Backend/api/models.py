from django.db import models

# Create your models here.


class ChatBot(models.Model):
    order = models.CharField(max_length=250)


