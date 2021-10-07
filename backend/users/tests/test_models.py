from django.test import TestCase
from users.models import User


class TestModels(TestCase):
    def test_create_user(self):
        user = User.objects.create_user(
            username="test", password="testpass123"
        )
        self.assertIn(user, User.objects.all())
