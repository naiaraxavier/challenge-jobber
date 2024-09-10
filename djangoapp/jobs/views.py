from rest_framework import viewsets
from .models import Jobs
from .serializers import JobsSerializer


class JobsViewSet(viewsets.ModelViewSet):
    # Dados que será usado pelo viewset
    queryset = Jobs.objects.all()
    # Serializador que será usada para converter dados entre JSON e modelo
    serializer_class = JobsSerializer
