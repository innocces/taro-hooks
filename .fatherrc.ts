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
    globals: 'taro-hooks',
    name: 'taro-hooks',
    miniFile: true,
    sourcemap: true,
  },
  runtimeHelpers: true,
};
