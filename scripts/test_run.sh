#!/usr/bin/env bash

set -e
set -o pipefail

xvfb-run karma start --single-run --browsers Chrome --reporters dots | tee .test.run
! grep -q :WARN .test.run
