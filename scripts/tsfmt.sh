#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

ls $TYPESCRIPT_TEST_DIR/src/**/*.{ts,tsx} | \
  grep -v $TYPESCRIPT_TEST_DIR/src/lib.core.d.ts | \
  grep -v $TYPESCRIPT_TEST_DIR/src/lib.dom.d.ts | \
  xargs tsfmt --verify
