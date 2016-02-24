#!/usr/bin/env bash

source "${BASH_SOURCE%/*}/common.sh"

echo -n "node "
node --version
echo -n "npm "
npm --version
go version

if [ "$(uname)" == "Linux" ]
then
  xvfb-run $CHROME_BIN --version
else
  $CHROME_BIN --version
fi

echo -n "tsc "
tsc --version
echo -n "tslint "
tslint --version
echo -n "tsfmt "
tsfmt --version
echo -n "go "
go version
