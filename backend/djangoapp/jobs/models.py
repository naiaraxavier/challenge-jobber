from django.db import models


class Jobs(models.Model):
    title = models.CharField(
        max_length=200,
        null=False,
        blank=False,
    )
    description = models.TextField(
        null=False,
        blank=False,
    )
    image = models.ImageField(upload_to="img/", null=True, blank=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
