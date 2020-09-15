from bs4 import BeautifulSoup
import requests
import time
import random
import os
from django.utils.timezone import make_aware
from datetime import datetime, timedelta
from fake_useragent import UserAgent
from .models import Cinema, Phone, Film, Session
from celery.utils.log import get_task_logger
import re
# cinemas = [
#     'Кинотеатр «Заря»:https://kinozarya.ru/',
#     'Синема Парк Европа:https://kinoteatr.ru/kaliningrad/',
#     'Киносфера:https://kinosfera.info/',
#     'Каро 7 Калининград-плаза:https://karofilm.ru/',
#     'Эпицентр:http://300003.ru/',
#     'Киноленд:https://kinoland.info/',
#     'Маяк (Пионерский):https://kino-mayak.ru/',
#     'Киноленд Марио (Светлогорск):https://kinoland-mario.ru/',
#     'Люмен-фильм (Гусев):http://www.lumenfilm.com/'
# ]


class Get_sessions():

    def save_film_from_kp(self, name_film, extra_info={}, alt_picture=''):
        kp_header = {'X-API-KEY': os.environ.get("KP_API_KEY")}
        time.sleep(0.5)
        # geting info fron kinopoisk
        current_year = datetime.strftime(datetime.today(), "%Y")
        last_month_year = datetime.strftime(
            datetime.today()-timedelta(days=45), "%Y")
        kp_film = requests.get(
            f"https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword={name_film}&page=1", headers=kp_header)
        if kp_film.status_code == 200:
            films = kp_film.json()
            if films['films']:
                a = iter(films['films'])
                try:
                    film = next(a)
                    while film["year"] != current_year or film["year"] != last_month_year:
                        film = next(a)
                except StopIteration:
                    print(name_film)
                    film = films['films'][0]
                kp_film_info = requests.get(
                    f"https://kinopoiskapiunofficial.tech/api/v2.1/films/{film['filmId']}", headers=kp_header)
                if kp_film_info.status_code == 200:
                    kp_film_info = kp_film_info.json()
                    print(name_film, kp_film_info)
                    for key in kp_film_info['data']:
                        if not kp_film_info['data'][key]:
                            kp_film_info['data'][key] = 0
                    try:
                        kp_film_info['data']['filmLength'] = int(
                            kp_film_info['data']['filmLength'])
                    except ValueError:
                        duration = kp_film_info['data']['filmLength'].split(
                            ':')
                        kp_film_info['data']['filmLength'] = (
                            int(duration[0]) * 60) + int(duration[1])
                    kp_film_info['data']['rating'] = film['rating']
                else:
                    print('Info cinema by ID doesn`t work ', name_film)
                    kp_film_info = {
                        'data': {'ratingAgeLimits': 0, 'filmLength': 0, 'rating': 0.0, 'description': '', 'nameRu': film['nameRu'], 'posterUrlPreview': alt_picture}}
            else:
                print('Search by keyword doesn`t work ', name_film)
                kp_film_info = {
                    'data': {'ratingAgeLimits': 0, 'filmLength': 0, 'rating': 0.0, 'description': '', 'nameRu': name_film, 'posterUrlPreview': alt_picture}}
        else:
            print('Search by keyword doesn`t work ', name_film)
            kp_film_info = {
                'data': {'ratingAgeLimits': 0, 'filmLength': 0, 'rating': 0.0, 'description': '', 'nameRu': name_film, 'posterUrlPreview': alt_picture}}
        try:
            mark_kp = float(kp_film_info['data']["rating"])
        except:
            mark_kp = 0.0
        extra_info.update({'info': kp_film_info['data'][
            'description'], 'afisha_url': kp_film_info['data']['posterUrlPreview'],
            'age_allowed': kp_film_info['data']['ratingAgeLimits'], 'duration': kp_film_info['data']['filmLength'], 'mark_kp': mark_kp})
        print(kp_film_info['data']['nameRu'], extra_info)
        try:
            film_query, _ = Film.objects.update_or_create(
                name=kp_film_info['data']['nameRu'], defaults=extra_info)
        except TypeError:
            print(kp_film_info['data']['nameRu'])
        return film_query

    def schedule_karo(self):
        try:
            ua = UserAgent()
        except:
            ua = UserAgent(verify_ssl=False)
        r_ua = ua.random
        cinema = Cinema.objects.get(name='КАРО 7 Плаза')
        # Getting a list  of films on the main page
        req = requests.get('https://karofilm.ru/', headers={'user-agent': r_ua,
                                                            'Cookie': 'YII_CSRF_TOKEN=f7d7c7f47d8d9564a186b6bebdae4823cce5666c; phpsession=ttj66pig3obfjcj4d392v9po16; popup_banner=2'})
        if req.status_code == 200:
            soup = BeautifulSoup(req.text, 'html.parser')
            films = soup.find_all(
                'a', class_='karo-wi-button afisha-media-url')
            for film in films:
                time.sleep(random.randint(1, 7) + 1)
                id_film = film.get('data-film')
                # get info from api with schedule
                req = requests.get(
                    f"https://api.karofilm.ru/movie-schedule?city_id=7&movie_id={id_film}", headers={'user-agent': r_ua})
                if req.status_code == 200:
                    films_info = req.json()
                    if films_info['data']:
                        film_query = Film.objects.filter(
                            karo_id=id_film)
                        if len(film_query) != 1:
                            film_query = self.save_film_from_kp(
                                films_info['data']['name'], {'karo_id': id_film}, films_info['data']['media']['poster_image']['desktop'])
                        else:
                            film_query = film_query[0]
                        for session_format in films_info['data']["items"][0]["formats"]:
                            formats = {2: '2D', 45: '2D', 13: '3D'}
                            for session in session_format["sessions"]:
                                try:
                                    price = float(
                                        session['standard_price']) / 100.00
                                except TypeError:
                                    price = 0.00
                                try:
                                    Session.objects.update_or_create(external_id=session['id'], cinema=cinema, film=film_query, defaults={'date': make_aware(datetime.strptime(
                                        f"{session['date']}_{session['time']}", "%Y-%m-%d_%H:%M")),
                                        'time': session['time'], 'price': price,
                                        'session_format': formats[session_format['id']]})
                                except KeyError:
                                    print(films_info['data']['name'],
                                          session, formats[session_format['id']],)

    def schedule_ramblerKassa(self, name):
        try:
            ua = UserAgent()
        except:
            ua = UserAgent(verify_ssl=False)
        r_ua = ua.random
        cinema = Cinema.objects.get(name=name[0])
        for day in range(4):
            time.sleep(random.randint(1, 7) + 1)
            date = datetime.strftime(
                datetime.today()+timedelta(days=day), "%Y.%m.%d")
            print("new DAY",date)
            req = requests.get(
                f'https://kassa.rambler.ru/kaliningrad/cinema/{name[1]}?date={date}&ajax=true', headers={'user-agent': r_ua})
            if req.status_code == 200:
                soup = BeautifulSoup(req.text, 'html.parser')
                films = soup.find_all('div', class_='rasp_item')
                for film in films:
                    film_name = film.find(class_='rasp_title').text.strip()
                    film_id = re.findall(
                        r'\d+', film.find(class_='rasp_title').find('a').get('href'))[0]
                    film_query = Film.objects.filter(
                        rambler_id=film_id)
                    if len(film_query) != 1:
                        film_query = self.save_film_from_kp(
                            film_name, {'rambler_id': film_id},)
                    else:
                        film_query = film_query[0]
                        formats = film.find_all('div', class_="rasp_type")
                        sessions = film.find_all('ul', class_='rasp_time')
                        for number in range(len(formats)):
                            session_format = formats[number].text.strip()
                            session_list = sessions[number]
                            if 'от' in session_format:
                                format_session = session_format[session_format.find(
                                    'ы')+2:session_format.find(
                                    'о')-1]
                                price = float(re.findall(
                                    r'\d+', session_format)[1])
                            else:
                                format_session = session_format[session_format.find(
                                    'ы')+2:]
                                price = 0.0
                            for session in session_list.find_all(class_="btn_rasp"):
                                session_time = session.text.strip()
                                external_id = session.get('data-session')
                                if external_id:
                                    date_time = datetime.strptime(
                                        f"{date}_{session_time}", "%Y.%m.%d_%H:%M")
                                    print(external_id, cinema)
                                    Session.objects.update_or_create(external_id=external_id, cinema=cinema,
                                                                     film=film_query, defaults={'date': make_aware(date_time),
                                                                                                'time': session_time, 'price': price, 'session_format': format_session})
