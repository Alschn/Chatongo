from django.contrib import admin

from .models import Relationship, User

admin.site.register([User, Relationship])
