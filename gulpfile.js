// Gulpfile
'use strict';

// Require gulp things
var gulp = require('gulp');
var harvester = require('seed-harvester');
var sass = require('gulp-sass');

// Build the CSS
gulp.task('styles', function() {
  // Automatically fetch the paths of seed packs
  var paths = harvester(
    // You can add your own paths here, example:
    // '/app/src/scss/'
  );
  return gulp.src('./scss/main.scss')
    .pipe(sass({
      includePaths: paths
    }))
    .pipe(gulp.dest('./example'));
});

// Default gulp task
// Build the CSS when we run "gulp"
gulp.task('default', ['styles']);
