// Gulp dependencies
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// Build dependencies
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

// Test dependencies
var jasmine = require('gulp-jasmine');

// Types of components
var types = ['stencil'];

// Generic error handler creates a notifcation window
function errorHandler() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}


function style() {
  types.forEach(function(type) {
    gulp.src('./stencila/'+type+'/'+type+'.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: require('node-normalize-scss').includePaths
         })
        .on('error', errorHandler))
        .pipe(rename(type+'.min.css'))
        .pipe(gulp.dest('./build'));
  });
}

function styles(watch) {
  types.forEach(function(type) {
    style(type,watch)
  });
}

// Scripts wathify-browserify-babelify-uglify-sourcemapify
// Thanks to 
//  https://gist.github.com/wesbos/52b8fe7e972356e85b43
//  https://gist.github.com/danharper/3ca2273125f500429945
// and others  
function script(type,watch) {
  var file = './stencila/'+type+'/'+type+'.js';

  var props = {
    entries: [file],
    debug : true,
    transform:  [babelify]
  };

  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  function bundle() {
    return bundler
      .bundle()
      .on('error',errorHandler)
      .pipe(source(file))
      .pipe(buffer())
      .pipe(rename(type+'.min.js'))
      .pipe(sourcemaps.init({
        loadMaps: true
      }))
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./build'));
  }

  bundler.on('update', function() {
    bundle();
    gutil.log('Bundling');
  });

  return bundle();
}

function scripts(watch) {
  types.forEach(function(type) {
    script(type,watch)
  });
}

// Gulp tasks for the above

gulp.task('styles', function() {
  return styles();
});

gulp.task('scripts', function() {
  return scripts();
});

gulp.task('build', function() {
  styles();
  scripts();
});

gulp.task('watch', function() {
  gulp.watch('**/*.scss', ['styles']);
  scripts(true);
});

gulp.task('test', ['build'], function () {
  return gulp.src('tests/jasmine/**/*.js')
    .pipe(jasmine());
});

gulp.task('default', ['watch']);
