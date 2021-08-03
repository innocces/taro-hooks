'use strict';

var _path = require('path');

var _project = require('@lerna/project');

var _fs = require('fs');

var _mkdirp = _interopRequireDefault(require('mkdirp'));

var _rimraf = _interopRequireDefault(require('rimraf'));

var _build = _interopRequireDefault(require('./build'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _createForOfIteratorHelper(o) {
  if (typeof Symbol === 'undefined' || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var it,
    normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(n);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function moveEsLibToDist(cwd) {
  ['es', 'lib'].forEach((dir) => {
    const absDirPath = (0, _path.join)(cwd, dir);
    const absDistPath = (0, _path.join)(cwd, 'dist');

    if ((0, _fs.existsSync)(absDirPath)) {
      _mkdirp.default.sync(absDistPath);

      (0, _fs.renameSync)(absDirPath, (0, _path.join)(absDistPath, dir));
    }
  });
}

describe('father build', () => {
  const rootConfigMapping = {
    'lerna-root-config-override': {
      cjs: 'rollup',
      esm: false,
    },
  };

  require('test-build-result')({
    root: (0, _path.join)(__dirname, './fixtures/build'),

    build({ cwd }) {
      process.chdir(cwd);

      _rimraf.default.sync((0, _path.join)(cwd, 'dist'));

      return (0, _build.default)({
        cwd,
        rootConfig: rootConfigMapping[(0, _path.basename)(cwd)],
      }).then(() => {
        // babel
        moveEsLibToDist(cwd); // lerna

        if ((0, _fs.existsSync)((0, _path.join)(cwd, 'lerna.json'))) {
          _mkdirp.default.sync((0, _path.join)(cwd, 'dist'));

          const pkgs = (0, _project.getPackagesSync)(cwd);

          var _iterator = _createForOfIteratorHelper(pkgs),
            _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              let pkg = _step.value;
              const pkgPath = pkg.contents;
              if (!(0, _fs.statSync)(pkgPath).isDirectory()) continue;
              moveEsLibToDist(pkgPath);
              (0, _fs.renameSync)(
                (0, _path.join)(pkgPath, 'dist'),
                (0, _path.join)(cwd, 'dist', pkgPath.split(_path.sep).pop()),
              );
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      });
    },
  });
});
