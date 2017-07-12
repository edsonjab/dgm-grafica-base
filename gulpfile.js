'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// Bootstrap scss source
var bootstrapSass = './bootstrap/stylesheets/';

var sassOpts = {
  outputStyle: 'compressed',
  precison: 3,
  errLogToConsole: true
}

gulp.task('sass', function() {
  return gulp.src(bootstrapSass + '**/**/*.scss')
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(bootstrapSass + '**/**/*.scss', ['sass']);
});