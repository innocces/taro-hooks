const { resolve } = require('path');
const gh = process.env.BUILD_TARGET === 'GH';
const weapp = process.env.TARO_ENV === 'weapp';

const config = {
  projectName: 'taro-hooks-plugin-vue',
  date: '2022-5-16',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: weapp ? 'dist-weapp' : 'dist',
  plugins: ['@taro-hooks/plugin-vue', '@tarojs/plugin-html'],
  defineConstants: {
    CF: process.env.CF_PAGES ? JSON.stringify(process.env.CF_PAGES) : "'0'",
  },
  alias: {
    '@root': resolve(__dirname, '..', '..', '..'),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'vue3',
  compiler: {
    type: 'webpack5',
    prebundle: {
      // https://github.com/jdf2e/nutui/issues/2103
      enable: !weapp,
      include: [],
    },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          // selectorBlackList: ['nut-'],
        },
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
  sass: {
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
    resource: [resolve(__dirname, '..', 'src/style', 'custom-theme.scss')],
  },
  h5: {
    publicPath: (gh ? '/taro-hooks' : '') + '/vue',
    staticDirectory: 'static',
    // esnextModules: ['nutui-taro'],
    router: {
      mode: 'browser',
      basename: (gh ? '/taro-hooks' : '') + '/vue',
    },
    postcss: {
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
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
