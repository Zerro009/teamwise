#!/usr/bin/env	bash
docker run -d -p 8002:5432 -e POSTGRES_PASSWORD="qwerty123" -e POSTGRES_USER="admin" -e POSTGRES_DB="ai4tihunter" postgres
