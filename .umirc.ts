import { defineConfig } from 'dumi';
import { components } from './components';

const { resolve } = require('path');
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
  ...(process.env.BUILD_TARGET === 'GH'
    ? {
        publicPath: '/taro-hooks/',
        base: '/taro-hooks',
        history: { type: 'hash' },
      }
    : {}),
  mode: 'site',
  devServer: {
    host: '0.0.0.0',
    port: 12345,
    https: true,
  },
  resolve: {
    includes: ['docs', 'packages/hooks/src', 'ant-mobile-taro/src'],
    passivePreview: true,
  },
  alias: {
    '@tarojs/components$': '@tarojs/components/dist-h5/react',
    '@tarojs/taro': '@tarojs/taro-h5',
    '@tarojs/runtime': '@taro-hooks/website-runtime',
    '@pages': __dirname + '/packages/app/src/pages',
    '@components': __dirname + '/packages/app/src/components',
    '@assets': __dirname + '/packages/app/src/assets',
    '@project': __dirname,
    'ant-mobile-taro/es': process.cwd() + '/ant-mobile-taro/src',
    demos: process.cwd() + '/ant-mobile-taro/src/demos/index.ts',
  },
  define: {
    'process.env.TARO_ENV': 'h5',
    LOCATION_APIKEY: JSON.stringify('J3OBZ-WBJKG-M5DQZ-IJQ4V-FSK2H-BTBZV'),
    BUILD_MODE: JSON.stringify(undefined),
  },
  extraPostCSSPlugins: [
    // require('postcss-pxtorem')({
    //   exclude: /packages\/hooks|.dumi|docs/i,
    //   rootValue: 100,
    //   unitPrecision: 5,
    //   propList: ['*'],
    //   selectorBlackList: [],
    //   replace: true,
    //   mediaQuery: true,
    //   minPixelValue: 0,
    // }),
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
  dynamicImport: {
    loading: resolve(__dirname, 'components/Loading'),
  },
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
  menus: {
    '/ant-mobile-taro': [
      {
        title: 'ant-mobile-taro',
        path: 'ant-mobile-taro',
      },
    ],
    '/ant-mobile-taro/src/components': [
      {
        title: '基础',
        children: components.basic,
      },
      {
        title: '数据展示',
        children: components.dataDisplay,
      },
      {
        title: '数据录入',
        children: components.dataEntry,
      },
      {
        title: '反馈',
        children: components.feedback,
      },
      {
        title: '导航和布局',
        children: components.navigationAndLayout,
      },
      {
        title: '其他',
        children: components.other,
      },
      {
        title: '试验性',
        children: components.experimental,
      },
    ],
  },
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
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.body.style.background = '#f5f7fa'
    }`,
  ],
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  styles: [
    `
    #root .__dumi-default-mobile-demo-layout {
      padding: 0;
    }
    body {
      min-height: 100vh;
    }
    `,
  ],
  themeConfig: {
    hd: {
      rules: [
        // { maxWidth: 375, mode: 'vw', options: [100, 750] },
        // { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
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
