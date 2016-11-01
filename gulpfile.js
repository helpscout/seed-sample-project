// Gulpfile
'use strict';

// Require gulp things
var gulp = require('gulp');
var harvester = require('seed-harvester');
var sass = require('gulp-sass');

// Define gulp tasks
gulp.task('styles', function() {
  return gulp.src('./scss/main.scss')
    .pipe(sass({
      includePaths: harvester()
    }))
    .pipe(gulp.dest('./example'));
});

gulp.task('default', ['styles']);
