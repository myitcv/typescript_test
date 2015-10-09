#!/usr/bin/env bash

set -ex
shopt -s globstar
shopt -s extglob

tsfmt --verify *(app|src)/**/*.{ts,tsx}
tslint -c app/tslint.json app/**/*.{ts,tsx}
pushd app > /dev/null
tsc
popd > /dev/null
