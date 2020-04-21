# System Setup
SHELL = bash

.PHONY: dev
dev: ## Run the dev test server
	npx parcel src/index.html

.PHONY: e2e
e2e: ## Run the selenium tests
	npx wdio run wdio.conf.js