dev:
	cd container && docker compose up --build --remove-orphans --detach

exec-nodejs:
	cd container && docker compose exec nodejs bash
