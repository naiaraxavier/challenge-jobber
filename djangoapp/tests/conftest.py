from rest_framework.test import APIClient
from django.contrib.auth.models import User
from datetime import datetime
from jobs.models import Jobs
import pytest


@pytest.fixture
def client():
    return APIClient()


@pytest.fixture(autouse=True)
def enable_db_access_for_all_tests(db):
    pass


@pytest.fixture(scope="session", autouse=True)
def django_db_setup(django_db_setup, django_db_blocker):
    with django_db_blocker.unblock():
        User.objects.create_user(username="testuser", password="12345")
        Jobs.objects.create(
            title="Fazer uma aplicação Django",
            description="CRUD com Django Rest Framework",
            image="http://127.0.0.1:8000/media/img/image.png",
            created_at=datetime(2024, 9, 1),
        )
