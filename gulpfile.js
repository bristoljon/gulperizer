
var gulp = require('gulp');
var colors = require('colors');
var Server = require('karma').Server;
var coffeelint = require('gulp-coffeelint');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');
var docco = require("gulp-docco");

gulp.task('all',['lint','coffee','docco','test']);
gulp.task('compile',['lint','coffee']);

// Linting
gulp.task('lint', function () {
    console.log("It's linting...".rainbow);
    gulp.src('./src/coffee/*.coffee')
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
    gulp.src('./spec/coffee/*.coffee')
        .pipe(coffeelint())
        .pipe(coffeelint.reporter())
});

// Coffee compiler
gulp.task('coffee', function() {
    console.log("It's compiling...".rainbow);
    // Compile src .coffee
    gulp.src('./src/coffee/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('./src/js/'));
    // Compile test.coffee
    gulp.src('./spec/coffee/*.coffee')
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(gulp.dest('./spec/js/'));
});

// Documentation
gulp.task('docco',function() {
    console.log("It's 'docking'... ಠ_ಠ".rainbow);
    gulp.src("./src/js/*.js")
        .pipe(docco())
        .pipe(gulp.dest('./documentation-output-js'));
    gulp.src("./src/coffee/*.coffee")
        .pipe(docco())
        .pipe(gulp.dest('./documentation-output-coffee'))
});


gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start()
});

gulp.task('sauce', function() {
  console.log("It's saucing...".random)
  return gulp.src(testFiles)
    .pipe(karma({
      configFile: 'karma.conf-ci.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});


