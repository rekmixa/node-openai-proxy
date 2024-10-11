install: cp-env up log

up:
	@docker compose up -d --remove-orphans --force-recreate --build

cp-env:
	@test -f .env || cp .env-dist .env

log:
	@docker compose logs -f
