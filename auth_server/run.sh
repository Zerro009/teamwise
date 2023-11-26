#!/usr/bin/env	bash
python manage.py migrate --run-syncdb
python manage.py runserver "$AUTH_SERVER_HOST:$AUTH_SERVER_PORT"
