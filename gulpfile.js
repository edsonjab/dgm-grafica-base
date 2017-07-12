'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

// Bootstrap scss source
var bootstrapSass = {
  in: './node_modules/bootstrap-sass/'
};

var sassOpts = {
  outputStyle: 'compressed',
  precison: 3,
  errLogToConsole: true,
  includePaths: [bootstrapSass.in + 'assets/stylesheets']
}

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass(sassOpts).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});