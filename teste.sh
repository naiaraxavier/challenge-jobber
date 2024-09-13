echo "rodando sh pelo Procfile"
cd djangoapp
python manage.py migrate
python manage.py collectstatic --noinput