#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

pushd $TYPESCRIPT_TEST_DIR > /dev/null

npm install

jspm config registries.github.timeouts.lookup 60
jspm config registries.github.timeouts.build 120
jspm config registries.github.remote https://github.jspm.io
jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
jspm config registries.github.maxRepoSize 0
jspm config registries.github.handler jspm-github
jspm config registries.jspm.repo https://github.com/jspm/registry
jspm config registries.jspm.handler jspm-registry
jspm install

typings install

popd > /dev/null
