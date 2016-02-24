#!/usr/bin/env bash
source "${BASH_SOURCE%/*}/common.sh"
set -ex

./scripts/copy_typescript_dtss.sh
ensure_clean $TYPESCRIPT_TEST_DIR
./scripts/jsonlint.sh
./scripts/tsfmt.sh
./scripts/tslint.sh
./scripts/compile.sh
./scripts/test_run.sh