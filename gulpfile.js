/*
 * Filename: gulpfile.js
 * Path: styleGuide
 * Created Date: Thursday, January 2nd 2020, 11:10:43 am
 * Author: Alexandre Rodrigues
 *
 * Copyright (c) 2020 Altran
 */

const gulp = require('gulp'),
  gulpsass = require('gulp-sass'),
  // sourcemaps = require('gulp-sourcemaps'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename');

function sass() {
  return gulp
    .src('./src/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(
      gulpsass().on(
        'error',
        notify.onError(function(error) {
          return 'Error ao compilar DarkTheme SASS: ' + error.message;
        })
      )
    )
    .pipe(notify({ message: 'SASS Compilado' }))
    // .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
}

exports.sass = sass;

function watch() {
  gulp.watch('./src/**/*.scss', sass);
}

exports.watch = watch;
