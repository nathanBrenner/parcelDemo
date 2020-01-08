# System Setup
SHELL = bash

.PHONY: dev
dev: ## Run the dev test server
	npx parcel src/index.html