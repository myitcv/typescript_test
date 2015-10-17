#!/usr/bin/env bash

set -e
shopt -s globstar
shopt -s extglob

pushd src > /dev/null
tsc
popd > /dev/null
