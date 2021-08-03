'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = _default;

var _chalk = _interopRequireDefault(require('chalk'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const colors = [
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'gray',
  'redBright',
  'greenBright',
  'yellowBright',
  'blueBright',
  'magentaBright',
  'cyanBright',
];
let index = 0;
const cache = {};

function _default(pkg) {
  if (!cache[pkg]) {
    const color = colors[index];

    let str = _chalk.default[color].bold(pkg);

    cache[pkg] = str;

    if (index === colors.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
  }

  return cache[pkg];
}
