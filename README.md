## `typescript_test`

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
http-server -a localhost -p 9001
```

Navigate to [http://localhost:9001] and see the served results of `app/browser.ts`
