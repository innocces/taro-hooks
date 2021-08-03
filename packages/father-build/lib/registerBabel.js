'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = _default;

var _path = require('path');

var _slash = _interopRequireDefault(require('slash2'));

var _getBabelConfig2 = _interopRequireDefault(require('./getBabelConfig'));

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

function _default(opts) {
  const cwd = opts.cwd,
    only = opts.only;

  const _getBabelConfig = (0, _getBabelConfig2.default)({
      target: 'node',
      typescript: true,
    }),
    babelConfig = _getBabelConfig.opts;

  require('@babel/register')(
    _objectSpread({}, babelConfig, {
      extensions: ['.es6', '.es', '.jsx', '.js', '.mjs', '.ts', '.tsx'],
      only: only.map((file) => (0, _slash.default)((0, _path.join)(cwd, file))),
      babelrc: false,
      cache: false,
    }),
  );
}
