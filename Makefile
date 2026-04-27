build:
	mvn clean install -DskipTests

test:
	mvn test

up:
	docker compose up --build -d

down:
	docker compose down -v

logs:
	docker compose logs -f --tail=200

lint:
	@echo "Lint placeholder"

format:
	@echo "Format placeholder"

migrate:
	@echo "Flyway runs at app startup"

seed:
	@echo "Seed from V2 migrations"

app:
	docker compose up --build $(APP)-backend $(APP)-frontend

rebuild:
	docker compose build --no-cache
