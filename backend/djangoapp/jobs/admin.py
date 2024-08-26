from django.contrib import admin
from .models import Jobs

admin.site.site_header = "Avanti Challenge Jobber"
admin.site.register(Jobs)
