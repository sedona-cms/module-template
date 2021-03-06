lint:
	npx eslint --fix '{src,scripts}/**/*.{js,ts,tsx}'

build-ts-dev: lint
	rm -rf lib
	npx tsc --project tsconfig.json

build-ts-prod: lint
	rm -rf lib
	npx tsc --project tsconfig.build.json

copy-css:
	cd ./src && find . -name '*.css' | cpio -pdm ./../lib

build-prod: build-ts-prod copy-css

build-example:
	npm ci
	npx npm-self-link
	make -f Makefile build-prod
	DEPLOY_ENV=GH_PAGES npx nuxt generate dev --modern
	cp -r dev/dist ./dist-docs

watch: build-ts-dev
	npx tsc-watch --onSuccess 'make -f Makefile copy-css'
