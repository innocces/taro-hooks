'use strict';

var _ajv = _interopRequireDefault(require('ajv'));

var _schema = _interopRequireDefault(require('./schema'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const ajv = new _ajv.default();
const successValidates = {
  entry: ['a', ['a'], ['a', 'b']],
  file: ['a'],
  esm: [
    false,
    true,
    {
      type: 'rollup',
    },
    {
      type: 'babel',
    },
    {
      file: 'a',
    },
    {
      mjs: true,
    },
    {
      dir: 'a',
    },
  ],
  cjs: [
    false,
    true,
    {
      type: 'rollup',
    },
    {
      type: 'babel',
    },
    {
      file: 'a',
    },
  ],
  umd: [
    {
      globals: {},
    },
    {
      file: 'a',
    },
    {
      name: 'a',
    },
    {
      minFile: false,
    },
    {
      minFile: true,
    },
    {
      sourcemap: true,
    },
  ],
  extraBabelPlugins: [[]],
  extraBabelPresets: [[]],
  extraPostCSSPlugins: [[]],
  lessInRollupMode: [{}],
  cssModules: [true, false, {}],
  autoprefixer: [{}],
  include: ['node_modules', /node_modules/],
  nodeResolveOpts: [{}],
  runtimeHelpers: [true, false],
  target: ['node', 'browser'],
  overridesByEntry: [{}],
  doc: [{}],
  typescriptOpts: [{}],
  pkgs: [[]],
};
Object.keys(successValidates).forEach((key) => {
  test(key, () => {
    successValidates[key].forEach((item) => {
      expect(
        ajv.validate(_schema.default, {
          [key]: item,
        }),
      ).toEqual(true);
    });
  });
});
