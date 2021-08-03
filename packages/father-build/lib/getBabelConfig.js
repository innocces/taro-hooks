'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = _default;

var _path = require('path');

function transformImportLess2Css() {
  return {
    name: 'transform-import-less-to-css',
    visitor: {
      ImportDeclaration(path, source) {
        const re = /\.less$/;

        if (re.test(path.node.source.value)) {
          path.node.source.value = path.node.source.value.replace(re, '.css');
        }
      },
    },
  };
}

function _default(opts) {
  const target = opts.target,
    typescript = opts.typescript,
    type = opts.type,
    runtimeHelpers = opts.runtimeHelpers,
    filePath = opts.filePath,
    browserFiles = opts.browserFiles,
    nodeFiles = opts.nodeFiles,
    nodeVersion = opts.nodeVersion,
    lazy = opts.lazy,
    lessInBabelMode = opts.lessInBabelMode;
  let isBrowser = target === 'browser'; // rollup 场景下不会传入 filePath

  if (filePath) {
    if (
      (0, _path.extname)(filePath) === '.tsx' ||
      (0, _path.extname)(filePath) === '.jsx'
    ) {
      isBrowser = true;
    } else {
      if (isBrowser) {
        if (nodeFiles.includes(filePath)) isBrowser = false;
      } else {
        if (browserFiles.includes(filePath)) isBrowser = true;
      }
    }
  }

  const targets = isBrowser
    ? {
        browsers: ['last 2 versions', 'IE 10'],
      }
    : {
        node: nodeVersion || 6,
      };
  return {
    opts: {
      presets: [
        ...(typescript ? [require.resolve('@babel/preset-typescript')] : []),
        [
          require.resolve('@babel/preset-env'),
          {
            targets,
            modules: type === 'esm' ? false : 'auto',
          },
        ],
        ...(isBrowser ? [require.resolve('@babel/preset-react')] : []),
      ],
      plugins: [
        ...(type === 'cjs' && lazy && !isBrowser
          ? [
              [
                require.resolve('@babel/plugin-transform-modules-commonjs'),
                {
                  lazy: true,
                },
              ],
            ]
          : []),
        ...(lessInBabelMode ? [transformImportLess2Css] : []),
        require.resolve('babel-plugin-react-require'),
        require.resolve('@babel/plugin-syntax-dynamic-import'),
        require.resolve('@babel/plugin-proposal-export-default-from'),
        require.resolve('@babel/plugin-proposal-export-namespace-from'),
        require.resolve('@babel/plugin-proposal-do-expressions'),
        require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
        require.resolve('@babel/plugin-proposal-optional-chaining'),
        [
          require.resolve('@babel/plugin-proposal-decorators'),
          {
            legacy: true,
          },
        ],
        [
          require.resolve('@babel/plugin-proposal-class-properties'),
          {
            loose: true,
          },
        ],
        ...(runtimeHelpers
          ? [
              [
                require.resolve('@babel/plugin-transform-runtime'),
                {
                  useESModules: isBrowser && type === 'esm',
                  version: require('@babel/runtime/package.json').version,
                },
              ],
            ]
          : []),
        ...(process.env.COVERAGE
          ? [require.resolve('babel-plugin-istanbul')]
          : []),
      ],
    },
    isBrowser,
  };
}
