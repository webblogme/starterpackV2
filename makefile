main: start
down: stop

start:
	docker-compose up -d

stop:
	docker-compose down
