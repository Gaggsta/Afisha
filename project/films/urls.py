from django.urls import path
from . import views

urlpatterns = [
    path("sessions/<int:day>/",
         views.SessionsListView.as_view()),
    path("cinemas/",
         views.CinemasListView.as_view())
]
