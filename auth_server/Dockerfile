FROM python:3
ENV PYTHONUNBUFFERED 1

ADD . ./app
COPY requirements.txt /app
WORKDIR /app

RUN pip install -r requirements.txt

CMD ["python", "manage.py", "makemigrations"]
CMD ["python", "manage.py", "migrate", "users"]
CMD ["python", "manage.py", "migrate", "tokens"]
CMD ["python", "manage.py", "migrate", "--run-syncdb"]
