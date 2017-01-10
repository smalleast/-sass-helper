(function() {

  'use strict';

  var gulp = require('gulp');
  var config = require('./config');
  var argv = require('yargs').argv;
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  gulp.task('styles', function() {
    return gulp.src(config.path.src + '/style.scss')
      .pipe($.sourcemaps.init())
      .pipe($.sass(config.sassOptions).on('error', $.sass.logError))
      .pipe($.autoprefixer('last 2 version'))
      .pipe(gulp.dest(config.path.dist))
      .pipe($.cssmin())
      .pipe($.rename({
        suffix: '.min',
        extname: '.css'
      }))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(config.path.dist));
  });



}());
