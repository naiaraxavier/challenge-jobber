from django.contrib.auth.models import User
from datetime import datetime
from jobs.models import Jobs


def test_user_table_is_healthy():
    number_of_users = len(User.objects.all())
    assert number_of_users == 1

    User.objects.create(username="user", password="password")
    number_of_users = len(User.objects.all())
    assert number_of_users == 2

    user = User.objects.get(id=1)
    user.delete()
    number_of_users = len(User.objects.all())
    assert number_of_users == 1


def test_jobs_table_is_healthy():
    # Check the initial count of jobs
    initial_amount_of_jobs = len(Jobs.objects.all())
    assert initial_amount_of_jobs == 1

    # Create a new job
    new_job = Jobs.objects.create(
        title="Fazer uma aplicação React",
        description="React com TypeScript",
        image="http://127.0.0.1:8000/media/img/image.png",
        created_at=datetime(2024, 8, 31),  # Use datetime object
    )

    # Check the updated count of jobs
    updated_amount_of_jobs = len(Jobs.objects.all())
    assert updated_amount_of_jobs == 2

    # Retrieve the job by ID
    job = Jobs.objects.get(id=new_job.id)  # Use the ID of the created job
    assert job is not None
    assert job.title == "Fazer uma aplicação React"

    # Delete the job
    job.delete()

    # Check the final count of jobs
    final_amount_of_jobs = len(Jobs.objects.all())
    assert final_amount_of_jobs == 1
