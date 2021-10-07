from django.conf import settings
from django.db import models


class Conversation(models.Model):
    name = models.CharField(max_length=100)
    users = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='users')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f'Conversation {self.name}'


class Message(models.Model):
    text = models.CharField(max_length=300)
    sender = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING)
    conversation = models.ForeignKey(
        to=Conversation, on_delete=models.DO_NOTHING
    )
    sent_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f'Message {self.id} by {self.sender}'
