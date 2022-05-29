const commonConfig = require('../../gulpfile');
const gulp = require('gulp');
const less = require('gulp-less');
const { join } = require('path');

gulp.task('build-style', function () {
  return gulp
    .src(['./src/style/**.less'], {
      base: './src/',
    })
    .pipe(
      less({
        paths: [join(__dirname, 'src')],
        relativeUrls: true,
      }),
    )
    .pipe(gulp.dest('lib/'))
    .pipe(gulp.dest('es/'));
});

exports.default = gulp.series(commonConfig.default, 'build-style');
