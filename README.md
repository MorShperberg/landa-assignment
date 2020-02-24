# Landa Assignment

Home exercise for a fullstack developer position

This app allows a user to sign up, login and get a profile page.
The authentication is made with django-rest-knox and djangorestframework.

## Getting Started

### Prerequisites

* Nodejs
* React 16+
* Python 3.7+
* Django 3.0+

### Installing

```
pip install djangorestframework
pip install django-rest-knox
pip install django-cors-headers
```

## Running the project


### Server

```
cd backend
python manage.py migrate
python manage.py runserver
```

### Client

```
cd frontend
npm install
npm start
```

## TODO

* Add logout button.
* Add extra fields at registration (First name, Last name, Date of birth, Joined date)
* As long as the token exists in local storage, redirect automatically to profile.
* Considering using external DB like postgres.
* Improve the UI style.
* Add registration verification (wrong password, duplicate email, etc.)