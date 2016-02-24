#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

pushd $TYPESCRIPT_TEST_DIR > /dev/null

# can pass this script -f to actually format the required files

jsonlint $@ -s 2 *.json ./src/**/*.json

popd > /dev/null
