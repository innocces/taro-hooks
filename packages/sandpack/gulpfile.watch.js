const commonConfig = require('../../gulpfile');
const gulp = require('gulp');

exports.default = gulp.watch('src/*', commonConfig.watchSeries);
