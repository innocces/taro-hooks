import progress from 'rollup-plugin-progress';

export default {
  entry: ['src/index.vue.ts', 'src/index.react.ts'],
  esm: {
    type: 'babel',
    file: 'ant-mobile-icon-taro',
    mjs: true,
    minify: true,
  },
  cjs: {
    type: 'babel',
    file: 'ant-mobile-icon-taro',
    lazy: true,
    minify: true,
  },
  umd: {
    name: 'ant-mobile-icon-taro',
    file: 'ant-mobile-icon-taro',
    minFile: true,
    sourcemap: true,
    globals: {
      '@tarojs/taro': 'Taro',
      '@tarojs/components': 'TaroComponents',
    },
  },
  overridesByEntry: {
    'src/index.react.ts': {
      umd: {
        name: 'ant-mobile-icon-taro-react',
        file: 'ant-mobile-icon-taro-react',
        globals: { react: 'React' },
      },
    },
    'src/index.vue.ts': {
      umd: {
        name: 'ant-mobile-icon-taro-vue',
        file: 'ant-mobile-icon-taro-vue',
        vueCompile: true,
        globals: { vue: 'Vue' },
      },
    },
  },
  lessInBabelMode: true,
  injectCSS: false,
  extractCSS: true,
  disableTypeCheck: true,
  runtimeHelpers: true,
  extraRollupPlugins: [progress({ clearLine: false })],
};
