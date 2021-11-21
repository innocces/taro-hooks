// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'vue3',
        ts: true,
      },
    ],
  ],
  plugins: [
    // [
    //   'import',
    //   {
    //     libraryName: 'ant-mobile-icon-taro',
    //     camel2DashComponentName: false,
    //     customName: (name) => {
    //       return 'ant-mobile-icon-taro/src/icons/vue/' + name + '.vue.tsx';
    //     },
    //   },
    //   'ant-mobile-icon-taro',
    // ],
  ],
};
