'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = _default;

var _path = require('path');

var _fs = require('fs');

var _vinylFs = _interopRequireDefault(require('vinyl-fs'));

var _signale = _interopRequireDefault(require('signale'));

var _lodash = _interopRequireDefault(require('lodash'));

var _rimraf = _interopRequireDefault(require('rimraf'));

var _through = _interopRequireDefault(require('through2'));

var _slash = _interopRequireDefault(require('slash2'));

var chokidar = _interopRequireWildcard(require('chokidar'));

var babel = _interopRequireWildcard(require('@babel/core'));

var _gulpTypescript = _interopRequireDefault(require('gulp-typescript'));

var _gulpLess = _interopRequireDefault(require('gulp-less'));

var _gulpPlumber = _interopRequireDefault(require('gulp-plumber'));

var _gulpIf = _interopRequireDefault(require('gulp-if'));

var _chalk = _interopRequireDefault(require('chalk'));

var _getBabelConfig2 = _interopRequireDefault(require('./getBabelConfig'));

var ts = _interopRequireWildcard(require('typescript'));

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

function _default(_x) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator(function* (opts) {
    const cwd = opts.cwd,
      rootPath = opts.rootPath,
      type = opts.type,
      watch = opts.watch,
      dispose = opts.dispose,
      importLibToEs = opts.importLibToEs,
      log = opts.log,
      _opts$bundleOpts = opts.bundleOpts,
      _opts$bundleOpts$targ = _opts$bundleOpts.target,
      target =
        _opts$bundleOpts$targ === void 0 ? 'browser' : _opts$bundleOpts$targ,
      runtimeHelpers = _opts$bundleOpts.runtimeHelpers,
      _opts$bundleOpts$extr = _opts$bundleOpts.extraBabelPresets,
      extraBabelPresets =
        _opts$bundleOpts$extr === void 0 ? [] : _opts$bundleOpts$extr,
      _opts$bundleOpts$extr2 = _opts$bundleOpts.extraBabelPlugins,
      extraBabelPlugins =
        _opts$bundleOpts$extr2 === void 0 ? [] : _opts$bundleOpts$extr2,
      _opts$bundleOpts$brow = _opts$bundleOpts.browserFiles,
      browserFiles =
        _opts$bundleOpts$brow === void 0 ? [] : _opts$bundleOpts$brow,
      _opts$bundleOpts$node = _opts$bundleOpts.nodeFiles,
      nodeFiles = _opts$bundleOpts$node === void 0 ? [] : _opts$bundleOpts$node,
      nodeVersion = _opts$bundleOpts.nodeVersion,
      disableTypeCheck = _opts$bundleOpts.disableTypeCheck,
      cjs = _opts$bundleOpts.cjs,
      lessInBabelMode = _opts$bundleOpts.lessInBabelMode;
    const srcPath = (0, _path.join)(cwd, 'src');
    const targetDir = type === 'esm' ? 'es' : 'lib';
    const targetPath = (0, _path.join)(cwd, targetDir);
    log(_chalk.default.gray(`Clean ${targetDir} directory`));

    _rimraf.default.sync(targetPath);

    function transform(opts) {
      const file = opts.file,
        type = opts.type;

      const _getBabelConfig = (0, _getBabelConfig2.default)({
          target,
          type,
          typescript: true,
          runtimeHelpers,
          filePath: (0, _slash.default)((0, _path.relative)(cwd, file.path)),
          browserFiles,
          nodeFiles,
          nodeVersion,
          lazy: cjs && cjs.lazy,
          lessInBabelMode,
        }),
        babelOpts = _getBabelConfig.opts,
        isBrowser = _getBabelConfig.isBrowser;

      if (importLibToEs && type === 'esm') {
        babelOpts.plugins.push(require.resolve('../lib/importLibToEs'));
      }

      babelOpts.presets.push(...extraBabelPresets);
      babelOpts.plugins.push(...extraBabelPlugins);
      const relFile = (0, _slash.default)(file.path).replace(`${cwd}/`, '');
      log(
        `Transform to ${type} for ${_chalk.default[
          isBrowser ? 'yellow' : 'blue'
        ](relFile)}`,
      );
      return babel.transform(
        file.contents,
        _objectSpread({}, babelOpts, {
          filename: file.path,
          // 不读取外部的babel.config.js配置文件，全采用babelOpts中的babel配置来构建
          configFile: false,
        }),
      ).code;
    }
    /**
     * tsconfig.json is not valid json file
     * https://github.com/Microsoft/TypeScript/issues/20384
     */

    function parseTsconfig(path) {
      const readFile = (path) => (0, _fs.readFileSync)(path, 'utf-8');

      const result = ts.readConfigFile(path, readFile);

      if (result.error) {
        return;
      }

      return result.config;
    }

    function getTsconfigCompilerOptions(path) {
      const config = parseTsconfig(path);
      return config ? config.compilerOptions : undefined;
    }

    function getTSConfig() {
      const tsconfigPath = (0, _path.join)(cwd, 'tsconfig.json');
      const templateTsconfigPath = (0, _path.join)(
        __dirname,
        '../template/tsconfig.json',
      );

      if ((0, _fs.existsSync)(tsconfigPath)) {
        return getTsconfigCompilerOptions(tsconfigPath) || {};
      }

      if (
        rootPath &&
        (0, _fs.existsSync)((0, _path.join)(rootPath, 'tsconfig.json'))
      ) {
        return (
          getTsconfigCompilerOptions(
            (0, _path.join)(rootPath, 'tsconfig.json'),
          ) || {}
        );
      }

      return getTsconfigCompilerOptions(templateTsconfigPath) || {};
    }

    function createStream(src) {
      const tsConfig = getTSConfig();
      const babelTransformRegexp = disableTypeCheck ? /\.(t|j)sx?$/ : /\.jsx?$/;

      function isTsFile(path) {
        return /\.tsx?$/.test(path) && !path.endsWith('.d.ts');
      }

      function isTransform(path) {
        return babelTransformRegexp.test(path) && !path.endsWith('.d.ts');
      }

      return _vinylFs.default
        .src(src, {
          allowEmpty: true,
          base: srcPath,
        })
        .pipe(watch ? (0, _gulpPlumber.default)() : _through.default.obj())
        .pipe(
          (0, _gulpIf.default)(
            (f) => !disableTypeCheck && isTsFile(f.path),
            (0, _gulpTypescript.default)(tsConfig),
          ),
        )
        .pipe(
          (0, _gulpIf.default)(
            (f) => lessInBabelMode && /\.less$/.test(f.path),
            (0, _gulpLess.default)(lessInBabelMode || {}),
          ),
        )
        .pipe(
          (0, _gulpIf.default)(
            (f) => isTransform(f.path),
            _through.default.obj((file, env, cb) => {
              try {
                file.contents = Buffer.from(
                  transform({
                    file,
                    type,
                  }),
                ); // .jsx -> .js

                file.path = file.path.replace(
                  (0, _path.extname)(file.path),
                  '.js',
                );
                cb(null, file);
              } catch (e) {
                _signale.default.error(`Compiled faild: ${file.path}`);

                console.log(e);
                cb(null);
              }
            }),
          ),
        )
        .pipe(_vinylFs.default.dest(targetPath));
    }

    return new Promise((resolve) => {
      const patterns = [
        (0, _path.join)(srcPath, '**/*'),
        `!${(0, _path.join)(srcPath, '**/fixtures{,/**}')}`,
        `!${(0, _path.join)(srcPath, '**/demos{,/**}')}`,
        `!${(0, _path.join)(srcPath, '**/__test__{,/**}')}`,
        `!${(0, _path.join)(srcPath, '**/__tests__{,/**}')}`,
        `!${(0, _path.join)(srcPath, '**/*.mdx')}`,
        `!${(0, _path.join)(srcPath, '**/*.md')}`,
        `!${(0, _path.join)(
          srcPath,
          '**/*.+(test|e2e|spec).+(js|jsx|ts|tsx)',
        )}`,
        `!${(0, _path.join)(srcPath, '**/tsconfig{,.*}.json')}`,
      ];
      createStream(patterns).on('end', () => {
        if (watch) {
          log(
            _chalk.default.magenta(
              `Start watching ${(0, _slash.default)(srcPath).replace(
                `${cwd}/`,
                '',
              )} directory...`,
            ),
          );
          const watcher = chokidar.watch(patterns, {
            ignoreInitial: true,
          });
          const files = [];

          function compileFiles() {
            while (files.length) {
              createStream(files.pop());
            }
          }

          const debouncedCompileFiles = _lodash.default.debounce(
            compileFiles,
            1000,
          );

          watcher.on('all', (event, fullPath) => {
            const relPath = fullPath.replace(srcPath, '');
            log(
              `[${event}] ${(0, _slash.default)(
                (0, _path.join)(srcPath, relPath),
              ).replace(`${cwd}/`, '')}`,
            );
            if (!(0, _fs.existsSync)(fullPath)) return;

            if ((0, _fs.statSync)(fullPath).isFile()) {
              if (!files.includes(fullPath)) files.push(fullPath);
              debouncedCompileFiles();
            }
          });
          process.once('SIGINT', () => {
            watcher.close();
          });
          dispose === null || dispose === void 0
            ? void 0
            : dispose.push(() => watcher.close());
        }

        resolve();
      });
    });
  });
  return _ref.apply(this, arguments);
}
