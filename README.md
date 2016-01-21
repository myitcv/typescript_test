## `typescript_test`

[![Build Status](https://travis-ci.org/myitcv/typescript_test.svg?branch=master)](https://travis-ci.org/myitcv/typescript_test)

Download and setup:

```
git clone git@github.com:myitcv/typescript_test.git typescript_test && cd $_
export PATH=$PWD/node_modules/.bin:$PATH
```

Best to add that `PATH` adjustment to your `.profile`/`.bash_profile`/etc.

Setup:

```
npm install
jspm install
tsd install
./scripts/protobuf_install
```

Compile (and watch for changes):

```
gulp watch
```

Run `NodeJS` app:

```
node main.js
```

Serving the browser version:

```
# use cache of -1 to always reload files
http-server -c-1 -a localhost -p 9001
```

Navigate to [http://localhost:9001](http://localhost:9001) and see the served results of `src/browser.ts`

## `protobuf`

This project needs two symlinks from the root:

```
protobuf -> https://github.com/google/protobuf/, specifically the js subdir
goog     -> https://github.com/google/closure-library/, specifically the closure/goog subdirectory
```

Get the require Go packages:

```
go get github.com/golang/protobuf/proto

```

Then run the Go server:

```
go run *.go
```

Optionally regenerate the Go and JS files:

```
protoc helloworld.proto --js_out=binary,library=helloworld_lib:src
protoc helloworld.proto --go_out=import_path=main:.
```
