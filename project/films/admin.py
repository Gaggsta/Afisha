from django.contrib import admin

from films.models import Cinema, Phone, Film, Session


class CinemasAdmin(admin.ModelAdmin):
    model = Cinema
    list_display = ['name', 'address']


class PhonesAdmin(admin.ModelAdmin):
    model = Phone
    list_display = ['phone', 'cinema']


class FilmsAdmin(admin.ModelAdmin):
    model = Film
    list_display = ['name', 'afisha_picture', 'age_allowed', 'mark_kp','karo_id','rambler_id']


class SessionsAdmin(admin.ModelAdmin):
    model = Session
    list_display = ['date', 'session_format', 'cinema', 'film', 'external_id']

    # def get_name(self, obj):
    #     return obj.author.name
    # get_name.admin_order_field = 'author'  # Allows column order sorting
    # get_name.short_description = 'Author Name'  # Renames column head
    # Filtering on side - for some reason, this works
    #list_filter = ['title', 'author__name']


admin.site.register(Phone, PhonesAdmin)
admin.site.register(Film, FilmsAdmin)
admin.site.register(Cinema, CinemasAdmin)
admin.site.register(Session, SessionsAdmin)
