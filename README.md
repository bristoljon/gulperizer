Gulperizer

An attempt to provide all the tools for developing and testing coffeescript.

Gulp needs to be installed globally (sudo npm install -g gulp).

Once installed you can use:

gulp compile - to lint and compile coffeescript files in:
./src/coffee/*.coffee
./spec/coffee/*.spec.coffee 
to
./src/js/*.js
./spec/js/*.js

gulp docco - generates documentation in ./documentation-output-coffee

gulp test - loads up a karma server with the src and spec .js files in the above folders

gulp all - all of the above
