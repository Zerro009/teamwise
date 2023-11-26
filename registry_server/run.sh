#!/usr/bin/env	bash
python manage.py migrate --run-syncdb
python manage.py runserver "$REGISTRY_SERVER_HOST:$REGISTRY_SERVER_PORT"
