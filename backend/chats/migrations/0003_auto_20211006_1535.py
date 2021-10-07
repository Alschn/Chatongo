# Generated by Django 3.2.7 on 2021-10-06 13:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0002_auto_20211006_1535'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='conversation',
            name='users',
            field=models.ManyToManyField(related_name='users', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='message',
            name='conversation',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.DO_NOTHING, to='chats.conversation'),
            preserve_default=False,
        ),
    ]