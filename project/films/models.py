from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.core.files import File
from urllib.request import urlopen
from tempfile import NamedTemporaryFile
from datetime import datetime


class Cinema(models.Model):
    name = models.CharField('Название', max_length=50)
    address = models.CharField('Адрес', max_length=150)
    cinema_icon = models.ImageField(
        verbose_name='Обложка фильма', upload_to='images/', default='images/Cinema_label.jpg')
    slug = models.CharField('Название транслитом', max_length=50, null=True)
    info = models.TextField('Описание', max_length=2000, null=True)
    url = models.CharField('URL сайта', max_length=100, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = _("Кинотеатры")


class Phone(models.Model):
    cinema = models.ForeignKey(Cinema, verbose_name='Кинотеатр', related_name='phones', on_delete=models.CASCADE,
                               null=True, blank=True)
    phone = models.CharField('Телефон', max_length=25)

    class Meta:
        verbose_name_plural = _("Телефоны")

    def __str__(self):
        return self.phone


class Film(models.Model):
    name = models.CharField('Название', max_length=100)
    info = models.TextField('Описание', max_length=2000)
    afisha_picture = models.ImageField(
        verbose_name='Обложка фильма', upload_to='images/')
    afisha_url = models.CharField(
        default="https://www.google.com/", max_length=500)
    age_allowed = models.PositiveSmallIntegerField(
        "Возрастное ограничение", default=0)
    karo_id = models.PositiveIntegerField(
        "ID кинотеатров КАРО", default=0)
    rambler_id = models.PositiveIntegerField(
        "ID кинотеатров Рамблера", default=0)
    duration = models.PositiveIntegerField(
        "Продолжительность", default=0)
    mark_kp = models.FloatField(
        "Оценка кинопоиска", default=0.0)

    def __str__(self):
        return self.name

    def get_remote_image(self):
        if self.afisha_url and not self.afisha_picture:
            img_temp = NamedTemporaryFile(delete=True)
            if "https" in self.afisha_url:
                img_temp.write(urlopen(self.afisha_url).read())
            else:
                img_temp.write(
                    urlopen("https://static.karofilm.ru" + self.afisha_url).read())
            img_temp.flush()
            self.afisha_picture.save(f"image_{self.pk}.jpg", File(img_temp))
            self.save()

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.get_remote_image()

    class Meta:
        verbose_name_plural = _("Фильмы")


class Session(models.Model):
    date = models.DateTimeField('Дата сеанса')
    time = models.CharField('Время', max_length=10)
    cinema = models.ForeignKey(
        Cinema, verbose_name='Кинотеатр', related_name='sessions', on_delete=models.CASCADE)
    external_id = models.CharField('ID внешнее', max_length=100, default=0)
    film = models.ForeignKey(Film, verbose_name='Фильм',
                             related_name='cinemas', on_delete=models.CASCADE)
    price = price = models.DecimalField(
        "Цена", decimal_places=2, max_digits=6, default=0.00)
    session_format = models.CharField(
        'Формат сеанса', max_length=15, default='2D')

    def __str__(self):
        return f'{datetime.date(self.date)} {self.time}'

    class Meta:
        unique_together = ('external_id', 'cinema')
        verbose_name_plural = _("Сеансы")
