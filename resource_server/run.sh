#!/usr/bin/env	bash
python manage.py migrate
python manage.py runserver "$RESOURCE_SERVER_HOST:$RESOURCE_SERVER_PORT"
