#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

pushd $TYPESCRIPT_TEST_DIR > /dev/null

gulp compile

popd > /dev/null
