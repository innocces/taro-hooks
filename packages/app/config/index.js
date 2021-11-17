const { resolve } = require('path');

console.log(resolve(__dirname, '../../../', 'ant-mobile-taro/src'));
const config = {
  projectName: 'taro-hooks',
  date: '2021-6-24',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 2 / 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: '../../app-dist',
  plugins: [],
  defineConstants: {
    LOCATION_APIKEY: JSON.stringify('J3OBZ-WBJKG-M5DQZ-IJQ4V-FSK2H-BTBZV'),
    BUILD_MODE: JSON.stringify(process.env.BUILD_MODE),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  alias: {
    '@components': resolve(__dirname, '../', 'src/components'),
    '@assets': resolve(__dirname, '../', 'src/assets'),
    'ant-mobile-taro/es': resolve(
      __dirname,
      '../../../',
      'ant-mobile-taro/src',
    ),
    'ant-mobile-icon-taro': resolve(
      __dirname,
      '../../../',
      'ant-mobile-icon-taro/src/index.react',
    ),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 2048, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    esnextModules: ['taro-ui'],
    publicPath: '/',
    staticDirectory: 'static',
    router: {
      mode: 'browser',
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      pxtransform: {
        enable: true,
        config: {
          exclude: (file) => {
            return file.indexOf('taro-ui') === -1;
          },
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
