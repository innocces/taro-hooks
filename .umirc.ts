import { defineConfig } from 'dumi';

const isProd = process.env.NODE_ENV === 'production';
const specialItem = ['list-item', 'countdown-item', 'action-sheet-item'];
const specialItemMap = {
  'action-sheet-item': 'action-sheet/body/item',
};
export default defineConfig({
  title: 'Taro-hooks',
  favicon: '/image/hook.png',
  logo: '/image/logo.png',
  outputPath: 'docs-dist',
  ...(process.env.BUILD_TARGET === 'GH' ? { publicPath: '/taro-hooks/' } : {}),
  mode: 'site',
  devServer: {
    host: '0.0.0.0',
    port: 12345,
    https: true,
  },
  alias: {
    '@tarojs/components$': '@tarojs/components/dist-h5/react',
    '@tarojs/taro': '@tarojs/taro-h5',
    '@tarojs/runtime': '@taro-hooks/website-runtime',
    '@pages': __dirname + '/packages/app/src/pages',
    '@components': __dirname + '/packages/app/src/components',
    '@assets': __dirname + '/packages/app/src/assets',
  },
  define: {
    'process.env.TARO_ENV': 'h5',
    LOCATION_APIKEY: JSON.stringify('J3OBZ-WBJKG-M5DQZ-IJQ4V-FSK2H-BTBZV'),
    BUILD_MODE: JSON.stringify(undefined),
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
    { title: 'GitHub', path: 'https://github.com/innocces/taro-hooks' },
    { title: 'Gitee', path: 'https://gitee.com/inocces/taro-hooks' },
    {
      title: '更新日志',
      path: 'https://github.com/innocces/taro-hooks/releases',
    },
  ],
  links: [{ rel: 'stylesheet', href: '/assets/style.css' }],
  headScripts: [
    {
      'data-name': 'BMC-Widget',
      'data-cfasync': 'false',
      src: 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js',
      'data-id': 'innocces',
      'data-description': 'Support me on Buy me a coffee!',
      'data-message': '_(:з」∠)_ thanks',
      'data-color': '#BD5FFF',
      'data-position': 'Right',
      'data-x_margin': '18',
      'data-y_margin': '18',
    },
  ],
  themeConfig: {
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
  ...(isProd
    ? {
        webpack5: {},
      }
    : {
        esbuild: {
          target: 'es5',
        },
      }),
  // more config: https://d.umijs.org/config
});
