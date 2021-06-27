import { defineConfig } from 'dumi';

const specialItem = ['list-item', 'countdown-item', 'action-sheet-item'];
const specialItemMap = {
  'action-sheet-item': 'action-sheet/body/item',
};
export default defineConfig({
  title: 'Taro-hooks',
  favicon: '/image/hook.png',
  logo: '/image/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  devServer: {
    port: 12345,
  },
  alias: {
    '@tarojs/components$': '@tarojs/components/dist-h5/react',
    '@tarojs/taro': '@tarojs/taro-h5',
    '@pages': __dirname + '/packages/app/src/pages',
  },
  define: {
    'process.env.TARO_ENV': 'h5',
  },
  extraPostCSSPlugins: [
    require('postcss-pxtorem')({
      exclude: /packages\/hooks|.dumi|docs/i,
      rootValue: 100,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 0,
    }),
  ],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'taro-hooks',
        camel2DashComponentName: false,
        libraryDirectory: 'src',
      },
      'taro-hooks',
    ],
    [
      'import',
      {
        libraryName: 'taro-ui',
        customName: (name) => {
          name = name.replace('at-', '');
          if (specialItemMap[name]) {
            name = specialItemMap[name];
          } else if (specialItem.includes(name)) {
            name = name.replace('-', '/');
          }
          return 'taro-ui/lib/components/' + name;
        },
        customStyleName: (name) => {
          name = name.replace('at-', '');
          if (specialItem.includes(name)) {
            name = name
              .split('-')
              .map((v, i, self) => (i === self.length - 1 ? null : v))
              .filter((v) => v)
              .join('-');
          }
          return 'taro-ui/dist/style/components/' + name + '.scss';
        },
      },
      'taro-ui',
    ],
  ],
  dynamicImport: {},
  exportStatic: {},
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/innocces/taro-hooks',
    },
    {
      title: '更新日志',
      path: 'https://github.com/innocces/taro-hooks/releases',
    },
  ],
  links: [{ rel: 'stylesheet', href: '/assets/style.css' }],
  themeConfig: {
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
  esbuild: {
    target: 'es5',
  },
  // more config: https://d.umijs.org/config
});
