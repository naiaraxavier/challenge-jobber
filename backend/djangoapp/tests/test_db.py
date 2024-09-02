# from django.contrib.auth.models import User
# from jobs.models import Jobs


# def test_user_table_is_healthy():
#     number_of_users = len(User.objects.all())
#     assert number_of_users == 1

#     User.objects.create(username="naiara", password="123456")
#     number_of_users = len(User.objects.all())
#     assert number_of_users == 2

#     user = User.objects.get(id=1)
#     user.delete()
#     number_of_users = len(User.objects.all())
#     assert number_of_users == 1


# def test_jobs_table_is_healthy():
#     amount_of_jobs = len(Jobs.objects.all())
#     assert amount_of_jobs == 1

#     Jobs.objects.create(
#         title="Fazer uma aplicação React",
#         description="React com typescript",
#         image="http://127.0.0.1:8000/media/img/image.png",
#         created_at="2024-08-31",
#     )
#     amount_of_jobs = len(Jobs.objects.all())
#     assert amount_of_jobs == 2

#     job = Jobs.objects.get(id=2)
#     job.delete()
#     amount_of_jobs = len(Jobs.objects.all())
#     assert amount_of_jobs == 2
