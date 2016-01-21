#!/usr/bin/env bash

set -e

if [ "$PROTOC_VERSION" == "" ]
then
  echo "PROTOC_VERSION must be set"
  exit 1
fi

PACKAGE_DIR=protobuf
PROTOJS_DIR=protobuf
GOOGLE_CLOSURE_DIR=goog

PROTOJS_VERSION="3.0.0-alpha-5"
GOOGLE_CLOSURE_VERSION="20160119"

PROTOJS_DOWNLOAD="protobuf-$PROTOJS_VERSION"
GOOGLE_CLOSURE_DOWNLOAD="closure-library-$GOOGLE_CLOSURE_VERSION"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd $SCRIPT_DIR/../ > /dev/null

mkdir -p $PACKAGE_DIR

pushd $PACKAGE_DIR > /dev/null

# remove symlinks
if [ -h $PROTOJS_DIR ]
then
  rm $PROTOJS_DIR
fi

if [ -h $GOOGLE_CLOSURE_DIR ]
then
  rm $GOOGLE_CLOSURE_DIR
fi

# download versions if they don't exist
if [ ! -e $PROTOJS_DOWNLOAD ]
then
  curl -sL https://github.com/google/protobuf/releases/download/v${PROTOC_VERSION}/protobuf-js-${PROTOJS_VERSION}.tar.gz | tar -zx
fi

if [ ! -e $GOOGLE_CLOSURE_DOWNLOAD ]
then
  curl -sL https://github.com/google/closure-library/archive/v${GOOGLE_CLOSURE_VERSION}.tar.gz | tar -zx
fi

# symlink
ln -s $PROTOJS_DOWNLOAD/js $PROTOJS_DIR
ln -s $GOOGLE_CLOSURE_DOWNLOAD/closure/goog $GOOGLE_CLOSURE_DIR
