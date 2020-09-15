from project.celery_file import app
from celery.utils.log import get_task_logger
from .get_schedule import Get_sessions

logger = get_task_logger(__name__)


@app.task
def getting_sessions_KARO():
    gs = Get_sessions()
    gs.schedule_karo()


@app.task
def getting_sessions_epicentr():
    gs = Get_sessions()
    gs.schedule_ramblerKassa(('Эпицентр', 'epitsentr-813'))


@app.task
def getting_sessions_cinemapark():
    gs = Get_sessions()
    gs.schedule_ramblerKassa(
        ('Синема Парк Европа', 'sinema-park-evropa-15793'))


@app.task
def getting_sessions_kinosfera():
    gs = Get_sessions()
    gs.schedule_ramblerKassa(('Киносфера', 'kinosfera-42894'))
