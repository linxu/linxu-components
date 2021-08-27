#### Install dependencies ####
install:
	yarn install --ignore-engines --pure-lockfile
	yarn lerna exec yarn

#### Runs Jest integration and Unit tests ####
test:
	yarn lerna:test

### Local Commands ###
local:
	yarn start-storybook -p 6006

### Create component documentation artifacts ###
build-storybook:
	yarn build-storybook

### Create component library build artifacts ###
build:
	yarn lerna:build

### Publish to NPM ###
publish:
	yarn lerna changed || true
	yarn lerna version patch --yes || true
	yarn lerna publish from-git --yes --no-verify-access || true
