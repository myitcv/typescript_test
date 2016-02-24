#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

ls src/**/*.{ts,tsx} | \
  grep -v src/lib.core.d.ts | \
  grep -v src/lib.dom.d.ts | \
  xargs tslint -c src/tslint.json
