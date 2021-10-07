from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver

from .models import Relationship


@receiver(post_save, sender=Relationship)
def add_to_friends(sender, instance, created, **kwargs):
    sender_ = instance.sender
    receiver_ = instance.receiver
    if instance.status == 'accepted':
        sender_.friends.add(receiver_.user)
        receiver_.friends.add(sender_.user)
        sender_.save()
        receiver_.save()


@receiver(pre_delete, sender=Relationship)
def remove_from_friends(sender, instance, **kwargs):
    sender = instance.sender
    receiver = instance.receiver
    sender.friends.remove(receiver.user)
    receiver.friends.remove(sender.user)
    sender.save()
    receiver.save()
