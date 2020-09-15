from rest_framework import serializers
from .models import Cinema, Phone, Film, Session
from datetime import datetime, timedelta, time
from django.utils.timezone import make_aware


class PhoneSerializer(serializers.ModelSerializer):
    """List of cinema phones """
    class Meta:
        model = Phone
        fields = ('phone',)


class FilteredListSerializer(serializers.ListSerializer):

    def to_representation(self, data):
        start_date = datetime.today(
        ) + timedelta(days=self.context['day']) - timedelta(minutes=10)
        end_date = datetime.combine(datetime.date(
            datetime.today() + timedelta(days=self.context['day']+1)), time(0, 0))
        data = data.filter(film=Film.objects.get(
            name=self.context['film'])).filter(
                date__range=(make_aware(start_date), make_aware(end_date))).order_by('date')
        return super(FilteredListSerializer, self).to_representation(data)


class SessionsListSerializer(serializers.ModelSerializer):
    """List of sessions for day"""
    class Meta:
        list_serializer_class = FilteredListSerializer
        model = Session
        fields = ('time', 'external_id', 'price', 'session_format')


class CinemaSerializer(serializers.ModelSerializer):
    """Info of cinema"""
    phones = serializers.StringRelatedField(many=True)
    sessions = SessionsListSerializer(many=True, read_only=True)

    class Meta:
        model = Cinema
        fields = ('name', 'address', 'phones',  'cinema_icon', 'sessions')


class CinemasListSerializer(serializers.ModelSerializer):
    """Info of cinema"""
    phones = serializers.StringRelatedField(many=True)

    class Meta:
        model = Cinema
        fields = ('name', 'address', 'phones', 'cinema_icon',)


class FilmsSerializer(serializers.ModelSerializer):
    """Info of films"""
    cinemas = serializers.SerializerMethodField()

    def get_cinemas(self, obj):
        return CinemaSerializer(Cinema.objects.all(), many=True, context={
            "film": obj.name, "day": self.context['day']}).data

    class Meta:
        model = Film
        fields = ('name', 'info', 'afisha_picture',
                  'age_allowed', 'duration', 'mark_kp', 'cinemas')
