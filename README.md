<strong>Gulperizer</strong>
<br/>
<br/>
An attempt to provide all the tools for developing and testing coffeescript.
<br/>
<br/>
Gulp needs to be installed globally (sudo npm install -g gulp).
<br/>
<br/>
Once installed you can use:
<br/>
<strong>gulp compile</strong> - to lint and compile coffeescript files in:
<br/>
./src/coffee/\*.coffee
<br/>
./spec/coffee/\*.spec.coffee
<br/>
to
<br/>
./src/js/\*.js
<br/>
./spec/js/\*.js
<br/>
<br/>
<strong>gulp docco</strong> - generates documentation in ./documentation-output-coffee
<br/>
<br/>
<strong>gulp test</strong> - loads up a karma server with the src and spec .js files in the above folders
<br/><br/>
<strong>gulp all</strong> - all of the above
