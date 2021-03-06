SHELL=/bin/bash

.DEFAULT_GOAL := help


help:
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	docker-compose run blog rm -rf node_modules
	docker-compose run blog npm install

build: ## Spin up building docker image
	docker-compose build
	docker-compose run blog rm -rf node_modules
	docker-compose run blog npm install

enter:
	docker-compose exec blog /bin/sh

up: ## Spin up the project
	docker-compose up

down: ## Bring down the environment
	docker-compose down
	docker stop $(docker ps -aq)

restart:
	docker-compose down
	docker-compose up