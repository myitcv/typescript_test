#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

xvfb-run karma start --single-run --browsers Chrome --reporters dots | tee .test.run
! grep -q :WARN .test.run
