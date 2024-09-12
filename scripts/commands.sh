#!/bin/sh

# O shell irá encerrar a execução do script quando um comando falhar
set -e

echo "PORT is set to: $PORT"

echo "Running collectstatic..."
python manage.py collectstatic --noinput

echo "Running makemigrations..."
python manage.py makemigrations --noinput

echo "Running migrate..."
python manage.py migrate --noinput

echo "Running runserver..."
# python manage.py runserver 0.0.0.0:$PORT
gunicorn jobber.wsgi:application --bind 0.0.0.0:$PORT

echo "Commands completed."
