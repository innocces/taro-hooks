const commonConfig = require('../../gulpfile');
const gulp = require('gulp');

exports.default = gulp.series(commonConfig.default);
