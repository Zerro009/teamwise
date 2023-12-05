#!/usr/bin/env	bash
python manage.py migrate
python manage.py runserver "$REGISTRY_SERVER_HOST:$REGISTRY_SERVER_PORT"
