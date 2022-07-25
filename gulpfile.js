const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

const isWatch = process.argv[2] === '-w';
const isSkipTS = process.argv[3] === '-skip';

gulp.task('clean', async function () {
  await del('lib/**');
  await del('es/**');
});

gulp.task('cjs', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'CommonJS',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'ESNext',
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('es/'));
});

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('es/'))
    .pipe(gulp.dest('lib/'));
});

gulp.task('watch', function () {
  const tasks = ['cjs', 'es'];
  if (!isSkipTS) {
    tasks.push('declaration');
  }
  gulp.watch(
    ['src/*', 'src/*/*'],
    { events: 'all', delay: 200, ignoreInitial: false, depth: 5 },
    gulp.series(...tasks),
  );
});

exports.watchSeries = gulp.series('cjs', 'es', 'declaration');

exports.default = isWatch
  ? gulp.series('watch')
  : gulp.series('clean', 'cjs', 'es', 'declaration');
