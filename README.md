# Typescript library for browser


## Build

Run `npm run build`, which runs rollup and outputs the library in `lib/`. 

## Run & Test

The `lib/` folder contains a html file `testdoc.html` which can be run in a
webserver to test the built library. `package.json` has a start script
`start_build` which will use python2.7 to start simple HTTP server in `lib/`
folder. Navigate to the url pointed by the server output and choose the
`testdoc.htm` in your browser window. The built library should be now running,
  or giving errors to browser console.
