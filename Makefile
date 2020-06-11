.PHONY: \
	list \
	lint lint/fix \
	precommit \
	test watch

list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'

lint: 
	npm run lint

lint/fix:
	npm run lint -- --fix

precommit: lint/fix test

test:
	npm run test:ci

watch:
	npm run test
