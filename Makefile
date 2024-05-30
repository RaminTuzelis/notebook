up:
	cd laradock && docker-compose up -d nginx mysql phpmyadmin workspace

down:
	cd laradock && docker-compose down

ssh:
	cd laradock && docker-compose exec workspace bash

up-build:
	cd laradock && docker-compose up -d --build nginx mysql phpmyadmin workspace
