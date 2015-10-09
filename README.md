Gulperizer

An attempt to provide all the tools for karma testing coffeescript.

Gulp needs to be installed globally (sudo npm install -g gulp).

Once installed use:

gulp compile - to lint and compile your coffeescript in ./src/coffee/*.coffee and ./spec/coffee/*.spec.coffee into ./src/js/*.js and ./spec/js/*.js respectively.

gulp test - loads up a karma server with the src and spec .js files in the above folders

gulp all - does all of the above


