# Sumo Scripting Api Library Rewrite in Pure TypeScript

## Roadmap 

1. **[finished]** Setup local development environment using webpack 
2. Build typescript library successfully with rollup as a javascript module and use it as a
   dependency in sumocode project. Execute custom user code that uses functions from this library in
   the sumocode player.
3. Install PixiJS and ThreeJS dependencies and confirm that their functionality work in development
   environment and as built library when used with sumocode.
4. Create asset management / bundle system.
5. Port functionality from the old scripting api so that 2D example user code starts to work.
6. Port functionality from the old scripting api so that 3D example user code starts to work.


## Progress Diary

Setup the project, install [SWC](https://github.com/swc-project/swc) transpiler. The library works
in local development environment using webpack, but not as a built javascript module when used
inside sumocode. Try next: Replace SWC with babel and see if that makes a difference.


## Development


### Running library in webpack dev server

Run `npm run start` 

### Running built library in webserver

Go to the build directory and start simple HTTP server with python2. Then use a html file that
includes the built library as module inside the html body. See `npm run start_build`
script. 







