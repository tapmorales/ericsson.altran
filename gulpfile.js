/*
 * Filename: gulpfile.js
 * Path: styleGuide
 * Created Date: Thursday, January 2nd 2020, 11:10:43 am
 * Author: Alexandre Rodrigues
 *
 * Copyright (c) 2020 Altran
 */

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  notify = require('gulp-notify'),
  rename = require('gulp-rename');

function darkTheme() {
  return gulp
    .src('./src/**/DarkTheme.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass().on(
        'error',
        notify.onError(function(error) {
          return 'Error ao compilar DarkTheme SASS: ' + error.message;
        })
      )
    )
    .pipe(rename('DarkTheme.css'))
    .pipe(notify({ message: 'SASS Compilado' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
}

exports.darkTheme = darkTheme;

function lightTheme() {
  return gulp
    .src('./src/**/LightTheme.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass().on(
        'error',
        notify.onError(function(error) {
          return 'Error ao compilar LightTheme SASS: ' + error.message;
        })
      )
    )
    .pipe(rename('LightTheme.css'))
    .pipe(notify({ message: 'SASS Compilado' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
}

exports.lightTheme = lightTheme;

function watch() {
  gulp.watch('./src/**/DarkTheme.scss', darkTheme);
  gulp.watch('./src/**/LightTheme.scss', lightTheme);
}

exports.watch = watch;
