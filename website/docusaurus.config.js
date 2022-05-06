// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const navbarItem = require('./navbar');

// env
const buildTarget = process.env.BUILD_TARGET;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Taro-hooks',
  tagline: '为 Taro 而设计的 Hooks Library',
  url: 'https://taro-hooks-innocces.vercel.app',
  baseUrl: buildTarget === 'GH' ? '/taro-hooks/' : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hook.png',
  organizationName: 'innocces', // Usually your GitHub org/user name.
  projectName: 'taro-hooks', // Usually your repo name.
  titleDelimiter: ' 🍺 ',

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/innocces/taro-hooks/edit/main/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/innocces/taro-hooks/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Taro-hooks',
        logo: {
          alt: 'Taro-hooks logo',
          src: 'img/hook.png',
        },
        items: navbarItem,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '相关资源',
            items: [
              {
                label: 'Taro',
                href: 'https://taro.jd.com/',
              },
              {
                label: 'Github',
                href: 'https://github.com/innocces/taro-hooks',
              },
              {
                label: '使用案例',
                href: 'https://github.com/taro-hooks/user-cases',
              },
            ],
          },
          {
            title: '友情推荐',
            items: [
              {
                label: 'taroify',
                href: 'https://github.com/mallfoundry/taroify',
              },
              {
                label: 'general-tools',
                href: 'https://general-tools.vercel.app/',
              },
            ],
          },
          {
            title: '关于作者',
            items: [
              {
                label: 'innocces',
                href: 'https://github.com/innocces',
              },
            ],
          },
          {
            title: '友情赞助',
            items: [
              {
                label: 'buy me coffee',
                href: 'https://www.buymeacoffee.com/innocces?ref=widget-1376490',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Taro-hooks, Inc. Built with Innocces.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'IRP4IYNFNW',
        apiKey: '714b0bc6e684aac4abddf2973530c87b',
        indexName: 'taro-hooks_query_suggestions',
        contextualSearch: true,
      },
      metadata: [
        {
          name: 'keywords',
          content:
            'taro-hooks, hooks, taro, tarojs, tarojs-hooks, react, react-hooks, javascript, lerna, monorepo, wechat, miniprograme, typescript, helpers, web, h5, rn, react-native',
        },
      ],
    }),

  stylesheets: ['http://at.alicdn.com/t/font_3373489_imvarji5zu.css'],

  scripts: [
    '/scripts/hotjar.js',
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
      defer: true,
    },
  ],

  customFields: {
    features: [
      [
        {
          name: '自定义模板',
          path: '/guide/quick-start',
          description: ['多种模板预设', '快速开始使用'],
        },
        {
          name: '自定义模板',
          path: '/guide/quick-start',
          description: ['多种模板预设', '快速开始使用'],
        },
        {
          name: '自定义模板',
          path: '/guide/quick-start',
          description: ['多种模板预设', '快速开始使用'],
        },
      ],
      [
        {
          name: 'typescript',
          tag: 'tsc check',
          description: ['使用typescript开发', '完整类型定义'],
        },
        {
          name: 'ahooks',
          tag: 'ahooks >= 3.x',
          description: ['useRequest', '结合ahooks扩展日常需要'],
        },
        {
          name: 'Taro API',
          tag: 'coverage all api',
          description: ['全api接入', '完全hook'],
        },
      ],
    ],
  },
};

module.exports = config;
