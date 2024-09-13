#!/bin/sh

# O shell irá encerrar a execução do script quando um comando falhar
set -e

echo "PORT is set to: $PORT"

while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
    echo "🟡 Waiting for Postgres Database Startup ($POSTGRES_HOST $POSTGRES_PORT) ..."
    sleep 2
done

echo "✅ Postgres Database Started Successfully ($POSTGRES_HOST:$POSTGRES_PORT)"

echo "🟡 Running collectstatic..."
python manage.py collectstatic --noinput

echo "🟡 Running makemigrations..."
python manage.py makemigrations --noinput

echo "🟡 Running migrate..."
python manage.py migrate --noinput

echo "✅ Commands completed."

echo "🟡 Running runserver..."
python manage.py runserver 0.0.0.0:$PORT



