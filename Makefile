dev:
	cd container && docker compose up --build --remove-orphans --detach

stop:
	cd container && docker compose stop

exec-nodejs:
	cd container && docker compose exec nodejs bash
