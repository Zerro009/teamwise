#!/usr/bin/env	bash

source .venv/bin/activate

./api_gateway/manage.py migrate
./api_gateway/manage.py migrate --run-syncdb
./api_gateway/manage.py runserver "$API_GATEWAY_HOST:$API_GATEWAY_PORT" &

./registry_server/manage.py migrate
./registry_server/manage.py migrate --run-syncdb
./registry_server/manage.py runserver "$REGISTRY_SERVER_HOST:$REGISTRY_SERVER_PORT" &

./auth_server/manage.py migrate
./auth_server/manage.py migrate --run-syncdb
./auth_server/manage.py runserver "$AUTH_SERVER_HOST:$AUTH_SERVER_PORT" &

./resource_server/manage.py migrate
./resource_server/manage.py migrate --run-syncdb
./resource_server/manage.py runserver "$RESOURCE_SERVER_HOST:$RESOURCE_SERVER_PORT" &
