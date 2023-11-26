#!/usr/bin/env	bash
python manage.py migrate
python manage.py runserver "$API_GATEWAY_HOST:$API_GATEWAY_PORT"
