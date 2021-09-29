# Typescript library for browser


## Build

Run `npm run build`, which runs rollup and outputs the library in `lib/`. 

The `lib/` folder contains a html file `testdoc.html` which can be run in a webserver to test the built library. `package.json` has a start script `start_build` which will use python2.7 to start simple HTTP server in `lib/` folder.

