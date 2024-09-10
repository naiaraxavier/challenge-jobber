from rest_framework import serializers
from .models import Jobs


class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        # O modelo que este serializador irá utilizar
        model = Jobs
        # Inclui todos os campos do modelo Jobs
        fields = "__all__"
