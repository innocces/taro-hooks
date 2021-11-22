const { resolve } = require('path');
const enablePostCss = process.env.POSTCSS;
console.log('enablePostCss', enablePostCss, enablePostCss != 1);
const config = {
  projectName: 'ant-mobile-taro@vue',
  date: '2021-11-20',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 2 / 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: '../../app-vue-dist',
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  defineConstants: {
    'process.env.BASEFONT': JSON.stringify(enablePostCss),
  },
  framework: 'vue3',
  alias: {
    '@components': resolve(__dirname, '../', 'src/components'),
    '@assets': resolve(__dirname, '../', 'src/assets'),
    'ant-mobile-taro/es': resolve(
      __dirname,
      '../../../',
      'ant-mobile-taro/src',
    ),
    'ant-mobile-taro': resolve(
      __dirname,
      '../../../',
      'ant-mobile-taro/src/index.vue',
    ),
    'ant-mobile-icon-taro': resolve(
      __dirname,
      '../../../',
      'ant-mobile-icon-taro/src/index.vue',
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
          limit: 1024, // 设定转换尺寸上限
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
    devServer: {
      port: 10089,
      https: true,
    },
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      pxtransform: {
        enable: enablePostCss != 1,
      },
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    webpackChain(chain) {
      chain.merge({
        module: {
          rule: {
            'replace-tag': {
              test: /\.tsx$/,
              loader: resolve(__dirname, 'tag-loader'),
            },
          },
        },
      });
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
