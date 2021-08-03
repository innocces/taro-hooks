'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getBundleOpts = getBundleOpts;
exports.build = build;
exports.buildForLerna = buildForLerna;
exports.default = _default;

var _fs = require('fs');

var _path = require('path');

var _rimraf = _interopRequireDefault(require('rimraf'));

var assert = _interopRequireWildcard(require('assert'));

var _lodash = require('lodash');

var _signale = _interopRequireDefault(require('signale'));

var _chalk = _interopRequireDefault(require('chalk'));

var _project = require('@lerna/project');

var _babel = _interopRequireDefault(require('./babel'));

var _rollup = _interopRequireDefault(require('./rollup'));

var _registerBabel = _interopRequireDefault(require('./registerBabel'));

var _utils = require('./utils');

var _getUserConfig = _interopRequireWildcard(require('./getUserConfig'));

var _randomColor = _interopRequireDefault(require('./randomColor'));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}

function getBundleOpts(opts) {
  const cwd = opts.cwd,
    _opts$buildArgs = opts.buildArgs,
    buildArgs = _opts$buildArgs === void 0 ? {} : _opts$buildArgs,
    _opts$rootConfig = opts.rootConfig,
    rootConfig = _opts$rootConfig === void 0 ? {} : _opts$rootConfig;
  const entry = (0, _utils.getExistFile)({
    cwd,
    files: ['src/index.tsx', 'src/index.ts', 'src/index.jsx', 'src/index.js'],
    returnRelative: true,
  });
  const userConfig = (0, _getUserConfig.default)({
    cwd,
  });
  const userConfigs = Array.isArray(userConfig) ? userConfig : [userConfig];
  return userConfigs.map((userConfig) => {
    const bundleOpts = (0, _lodash.merge)(
      {
        entry,
      },
      rootConfig,
      userConfig,
      buildArgs,
    ); // Support config esm: 'rollup' and cjs: 'rollup'

    if (typeof bundleOpts.esm === 'string') {
      bundleOpts.esm = {
        type: bundleOpts.esm,
      };
    }

    if (typeof bundleOpts.cjs === 'string') {
      bundleOpts.cjs = {
        type: bundleOpts.cjs,
      };
    }

    return bundleOpts;
  });
}

function validateBundleOpts(bundleOpts, { cwd, rootPath }) {
  if (bundleOpts.runtimeHelpers) {
    const pkgPath = (0, _path.join)(cwd, 'package.json');
    assert.ok(
      (0, _fs.existsSync)(pkgPath),
      `@babel/runtime dependency is required to use runtimeHelpers`,
    );
    const pkg = JSON.parse((0, _fs.readFileSync)(pkgPath, 'utf-8'));
    assert.ok(
      (pkg.dependencies || {})['@babel/runtime'],
      `@babel/runtime dependency is required to use runtimeHelpers`,
    );
  }

  if (
    bundleOpts.cjs &&
    bundleOpts.cjs.lazy &&
    bundleOpts.cjs.type === 'rollup'
  ) {
    throw new Error(
      `
cjs.lazy don't support rollup.
    `.trim(),
    );
  }

  if (!bundleOpts.esm && !bundleOpts.cjs && !bundleOpts.umd) {
    throw new Error(
      `
None format of ${_chalk.default.cyan(
        'cjs | esm | umd',
      )} is configured, checkout https://github.com/umijs/father for usage details.
`.trim(),
    );
  }

  if (bundleOpts.entry) {
    const tsConfigPath = (0, _path.join)(cwd, 'tsconfig.json');
    const tsConfig =
      (0, _fs.existsSync)(tsConfigPath) ||
      (rootPath &&
        (0, _fs.existsSync)((0, _path.join)(rootPath, 'tsconfig.json')));

    if (
      !tsConfig &&
      ((Array.isArray(bundleOpts.entry) &&
        bundleOpts.entry.some(isTypescriptFile)) ||
        (!Array.isArray(bundleOpts.entry) &&
          isTypescriptFile(bundleOpts.entry)))
    ) {
      _signale.default.info(
        `Project using ${_chalk.default.cyan(
          'typescript',
        )} but tsconfig.json not exists. Use default config.`,
      );
    }
  }
}

function isTypescriptFile(filePath) {
  return filePath.endsWith('.ts') || filePath.endsWith('.tsx');
}

function build(_x) {
  return _build.apply(this, arguments);
}

function _build() {
  _build = _asyncToGenerator(function* (opts, extraOpts = {}) {
    const cwd = opts.cwd,
      rootPath = opts.rootPath,
      watch = opts.watch;
    const pkg = extraOpts.pkg;
    const dispose = []; // register babel for config files

    (0, _registerBabel.default)({
      cwd,
      only: _getUserConfig.CONFIG_FILES,
    });
    const pkgName =
      (typeof pkg === 'string'
        ? pkg
        : pkg === null || pkg === void 0
        ? void 0
        : pkg.name) || 'unknown';

    function log(msg) {
      console.log(
        `${pkg ? `${(0, _randomColor.default)(`${pkgName}`)}: ` : ''}${msg}`,
      );
    } // Get user config

    const bundleOptsArray = getBundleOpts(opts);

    var _iterator = _createForOfIteratorHelper(bundleOptsArray),
      _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const bundleOpts = _step.value;
        validateBundleOpts(bundleOpts, {
          cwd,
          rootPath,
        }); // Clean dist

        log(_chalk.default.gray(`Clean dist directory`));

        _rimraf.default.sync((0, _path.join)(cwd, 'dist')); // Build umd

        if (bundleOpts.umd) {
          log(`Build umd`);
          yield (0, _rollup.default)({
            cwd,
            rootPath,
            log,
            type: 'umd',
            entry: bundleOpts.entry,
            watch,
            dispose,
            bundleOpts,
          });
        } // Build cjs

        if (bundleOpts.cjs) {
          const cjs = bundleOpts.cjs;
          log(`Build cjs with ${cjs.type}`);

          if (cjs.type === 'babel') {
            yield (0, _babel.default)({
              cwd,
              rootPath,
              watch,
              dispose,
              type: 'cjs',
              log,
              bundleOpts,
            });
          } else {
            yield (0, _rollup.default)({
              cwd,
              rootPath,
              log,
              type: 'cjs',
              entry: bundleOpts.entry,
              watch,
              dispose,
              bundleOpts,
            });
          }
        } // Build esm

        if (bundleOpts.esm) {
          const esm = bundleOpts.esm;
          log(`Build esm with ${esm.type}`);
          const importLibToEs = esm && esm.importLibToEs;

          if (esm && esm.type === 'babel') {
            yield (0, _babel.default)({
              cwd,
              rootPath,
              watch,
              dispose,
              type: 'esm',
              importLibToEs,
              log,
              bundleOpts,
            });
          } else {
            yield (0, _rollup.default)({
              cwd,
              rootPath,
              log,
              type: 'esm',
              entry: bundleOpts.entry,
              importLibToEs,
              watch,
              dispose,
              bundleOpts,
            });
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return dispose;
  });
  return _build.apply(this, arguments);
}

function buildForLerna(_x2) {
  return _buildForLerna.apply(this, arguments);
}

function _buildForLerna() {
  _buildForLerna = _asyncToGenerator(function* (opts) {
    const cwd = opts.cwd,
      _opts$rootConfig2 = opts.rootConfig,
      rootConfig = _opts$rootConfig2 === void 0 ? {} : _opts$rootConfig2,
      _opts$buildArgs2 = opts.buildArgs,
      buildArgs = _opts$buildArgs2 === void 0 ? {} : _opts$buildArgs2; // register babel for config files

    (0, _registerBabel.default)({
      cwd,
      only: _getUserConfig.CONFIG_FILES,
    });
    const userConfig = (0, _lodash.merge)(
      (0, _getUserConfig.default)({
        cwd,
      }),
      rootConfig,
      buildArgs,
    );
    let pkgs = yield (0, _project.getPackages)(cwd); // support define pkgs in lerna
    // TODO: 使用lerna包解决依赖编译问题

    if (userConfig.pkgs) {
      pkgs = userConfig.pkgs
        .map((item) => {
          return pkgs.find((pkg) => (0, _path.basename)(pkg.contents) === item);
        })
        .filter(Boolean);
    }

    const dispose = [];

    var _iterator2 = _createForOfIteratorHelper(pkgs),
      _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const pkg = _step2.value;
        if (
          process.env.PACKAGE &&
          (0, _path.basename)(pkg.contents) !== process.env.PACKAGE
        )
          continue; // build error when .DS_Store includes in packages root

        const pkgPath = pkg.contents;
        assert.ok(
          (0, _fs.existsSync)((0, _path.join)(pkgPath, 'package.json')),
          `package.json not found in packages/${pkg}`,
        );
        process.chdir(pkgPath);
        dispose.push(
          ...(yield build(
            _objectSpread({}, opts, {
              buildArgs: opts.buildArgs,
              rootConfig: userConfig,
              cwd: pkgPath,
              rootPath: cwd,
            }),
            {
              pkg,
            },
          )),
        );
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return dispose;
  });
  return _buildForLerna.apply(this, arguments);
}

function _default(_x3) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(function* (opts) {
    const useLerna = (0, _fs.existsSync)(
      (0, _path.join)(opts.cwd, 'lerna.json'),
    );
    const isLerna = useLerna && process.env.LERNA !== 'none';
    const dispose = isLerna ? yield buildForLerna(opts) : yield build(opts);
    return () => dispose.forEach((e) => e());
  });
  return _ref.apply(this, arguments);
}
