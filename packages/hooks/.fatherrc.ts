export default {
  esm: {
    type: 'babel',
    file: 'taro-hooks',
    mjs: true,
    minify: true,
  },
  cjs: {
    type: 'babel',
    file: 'taro-hooks',
    lazy: true,
    minify: true,
  },
  umd: {
    globals: {
      react: 'React',
      '@tarojs/taro': 'Taro',
      querystring: 'querystring',
    },
    name: 'taro-hooks',
    file: 'taro-hooks',
    minFile: true,
    sourcemap: true,
  },
  injectCSS: false, // 不注入css
  extractCSS: false, // 单独提取css
  runtimeHelpers: true,
  disableTypeCheck: true,
};
