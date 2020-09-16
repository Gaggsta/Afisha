from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import APIException, NotFound
import random
from .models import Session, Phone, Cinema, Film
from .serializers import FilmsSerializer, CinemasListSerializer
from datetime import datetime, timedelta, time
from .get_schedule import Get_sessions
from django.utils.timezone import make_aware


class SessionsListView(APIView):
    """ Getting films list"""

    def get(self, request, day):
        if day >= 0 and day <= 2:
            if day == 0:
                today = datetime.today()
            else:
                today = datetime.combine(datetime.date(
                    datetime.today()), time(0, 0))
            start_date = today + timedelta(days=day) - timedelta(minutes=10)
            end_date = datetime.combine(datetime.date(
                today + timedelta(days=day+1)), time(0, 0))
            films = Film.objects.filter(id__in=Session.objects.filter(
                date__range=(make_aware(start_date), make_aware(end_date))).values_list('film')).order_by('name')
            queryset = FilmsSerializer(
                instance=films, many=True, context={"start_date": start_date,"end_date":end_date})
            return Response(queryset.data)
        else:
            res = {"code": 400, "message": "Bad Requset"}
            return Response(data=res, status=NotFound.status_code)


class CinemasListView(APIView):
    def get(self, request):
        cinemas = CinemasListSerializer(
            instance=Cinema.objects.all(), many=True)
        return Response(cinemas.data)
