help:
	@grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-40s\033[0m %s\n", $$1, $$2}'

install: build install_requirements migrate_database ## Build images and setup API

build: ## Build development images
	docker-compose build

install_requirements: ## Install API requirements
	docker-compose run --rm backend bundle install

migrate_database: ## Create API database and run migrations
	docker-compose run --rm backend rails db:create db:migrate

drop_database: ## Drop API database
	docker-compose run --rm backend rails db:drop

run_test: ## Run API tests
	docker-compose run --rm backend rails test

run_console: ## Run API console
	docker-compose run --rm backend rails console
