const { resolve } = require('path');

const gh = process.env.BUILD_TARGET === 'GH';
const weapp = process.env.TARO_ENV === 'weapp';

const config = {
  projectName: 'taro-hooks-plugin',
  date: '2022-5-6',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: weapp ? 'dist-weapp' : 'dist',
  plugins: ['@taro-hooks/plugin-react', '@taro-hooks/plugin-auto-import'],
  defineConstants: {
    CF: process.env.CF_PAGES ? JSON.stringify(process.env.CF_PAGES) : "'0'",
  },
  alias: {
    '@root': resolve(__dirname, '..', '..', '..'),
    '@src': resolve(__dirname, '..', 'src'),
  },
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
    prebundle: {
      enable: true,
      include: [],
      exclude: ['@taroify/core', '@taroify/icons'],
    },
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    miniCssExtractPluginOption: {
      ignoreOrder: true,
    },
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
    publicPath: (gh ? '/taro-hooks' : '') + '/react',
    staticDirectory: 'static',
    esnextModules: ['@taroify'],
    router: {
      mode: 'browser',
      basename: (gh ? '/taro-hooks' : '') + '/react',
    },
    staticDirectory: 'static',
    devServer: {
      port: '12557',
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true,
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
