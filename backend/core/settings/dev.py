"""
Configuration for development with Docker.
"""
import os

from core.settings.base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY', 'development')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["backend", "localhost", "127.0.0.1"]

DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': os.environ.get('MONGODB_DB_NAME', 'chatongo_db'),
        'CLIENT': {
            'host': 'mongodb://mongo_db:27017',
            'username': os.environ.get('MONGODB_USER', 'admin'),
            'password': os.environ.get('MONGODB_PASSWORD', 'admin'),
            "authSource": "admin",
            "authMechanism": "SCRAM-SHA-1",
        },
    }
}


CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [('redis_db', 6379)],
        },
    },
}
