export default {
  esm: {
    type: 'babel',
  },
  cjs: {
    type: 'babel',
    lazy: true,
  },
  umd: {
    globals: 'taro-hooks',
    name: 'taro-hooks',
    miniFile: true,
  },
  runtimeHelpers: true,
};
