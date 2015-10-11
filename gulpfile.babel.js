'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import rimraf from 'rimraf';
import source from 'vinyl-source-stream';

gulp.task('clean', (cb) => {
  rimraf('public/', cb);
});

gulp.task('build', ['clean'], () => {
  const extensions = ['.js', '.jsx'];
  return browserify({ extensions })
    .transform(babelify.configure({
      extensions
    }))
    .require('./src/app.jsx', { entry: true })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/'));
});

gulp.task('copy', ['clean'], () => {
  gulp.src(['src/**/*', '!src/**/*.jsx'])
    .pipe(gulp.dest('public/'));
});

gulp.task('default', ['build', 'copy'], () => {});
