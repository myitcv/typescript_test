#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

pushd $TYPESCRIPT_TEST_DIR > /dev/null

npm shrinkwrap --dev
jsonlint -s 2 -f npm-shrinkwrap.json

popd > /dev/null
