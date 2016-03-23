#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

pushd $TYPESCRIPT_TEST_DIR > /dev/null

cat node_modules/typescript/lib/lib.es5.d.ts | \
  sed -e 's/declare var/declare const/g' \
  > src/lib.es5.d.ts

cat node_modules/typescript/lib/lib.dom.d.ts | \
  sed '0,/declare var URL: URL;/{/declare var URL: URL;/d;}' | \
  sed -e 's/declare var/declare const/g' \
  > src/lib.dom.d.ts

popd > /dev/null
