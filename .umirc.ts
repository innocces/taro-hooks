import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Taro-hooks',
  favicon: '/image/logo.png',
  logo: '/image/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  devServer: {
    port: 12345,
  },
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
      // 根据不同的设备屏幕宽度断点切换高清方案
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
  // more config: https://d.umijs.org/config
});
