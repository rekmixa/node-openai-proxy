install: cp-env up

up:
	@docker-compose up -d --remove-orphans --force-recreate --build

cp-env:
	@test -f .env || cp .env-dist .env
