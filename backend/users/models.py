from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.query import QuerySet


class User(AbstractUser):
    friends = models.ManyToManyField(to='self', blank=True)

    def get_friends(self) -> QuerySet['User']:
        return self.friends.all()


class RelationshipManager(models.Manager):
    def invitations_received(self, receiver):
        return Relationship.objects.filter(receiver=receiver, status='sent')


class Relationship(models.Model):
    STATUS_CHOICES = (
        ('sent', 'sent'),
        ('accepted', 'accepted'),
        ('rejected', 'rejected'),
    )

    sender = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sender'
    )
    receiver = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='receiver'
    )
    status = models.CharField(max_length=8, choices=STATUS_CHOICES)

    objects = RelationshipManager()

    class Meta:
        unique_together = ('sender', 'receiver')

    def __str__(self) -> str:
        return f"{self.sender}-{self.receiver}-{self.status}"
