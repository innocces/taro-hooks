// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { join } = require('path');
const { version } = require(join(
  process.cwd(),
  '../',
  'packages',
  'hooks',
  'package.json',
));
const navbarItem = require('./navbar');
const prod = process.env.NODE_ENV === 'production';
// env
const buildTarget = process.env.BUILD_TARGET;
const gh = buildTarget === 'GH';
const urlPrefix = (gh ? '/taro-hooks' : '') + '/site';
const baseURI =
  'https://next-version-taro-hooks.vercel.app' + (gh ? '/taro-hooks' : '');
const githubURL = 'https://github.com/innocces/taro-hooks';
const githubURLWithBranch = `${githubURL}/edit/next`;

const pluginOptionAlias = {
  '@vue-demo': join(
    process.cwd(),
    '..',
    'examples',
    'taro-hooks-plugin-vue/src/pages',
  ),
  '@react-demo': join(
    process.cwd(),
    '..',
    'examples',
    'taro-hooks-plugin/src/pages',
  ),
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Taro-hooks',
  tagline: '为 Taro 而设计的 Hooks Library',
  url: baseURI,
  baseUrl: `${urlPrefix}/`,
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

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@taro-hooks/plugin-docusaurus',
      {
        alias: pluginOptionAlias,
        vue: {
          alias: pluginOptionAlias['@vue-demo'],
          openTarget: `${githubURLWithBranch}/examples/taro-hooks-plugin-vue/src/pages`,
          previewOptions: require('./project.env')(prod, baseURI),
        },
      },
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'hooks',
        path: '../packages/hooks/src',
        routeBasePath: '/hooks',
        ...generateDocsOptions('src'),
        sidebarPath: require.resolve('./sidebarsHooks.json'),
      }),
    ],
  ],

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: `${githubURLWithBranch}/website/`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: `${version} 🤖`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: `${githubURLWithBranch}/website/`,
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
              {
                label: 'ryan-117',
                href: 'https://github.com/ryan-117',
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
      announcementBar: {
        id: 'announce current progress info',
        content: `
          <div class="general-announcement">
            <a target="__blank" href="https://github.com/innocces/taro-hooks/tree/next"><b>taro-hooks@next</b></a> 暂处于beta🤖阶段! 即将推出 🎉
          </div>
        `,
        textColor: 'var(--ifm-color-white)',
        backgroundColor: 'var(--ifm-color-primary)',
        isCloseable: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['shell-session', 'http'],
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

  stylesheets: ['//at.alicdn.com/t/font_3373489_imvarji5zu.css'],

  scripts: [
    `${urlPrefix}/scripts/hotjar.js`,
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
          path: '/docs/quick/install-start',
          icon: 'img/features/template.svg',
          description: ['多种模板预设', '快速开始使用'],
        },
        {
          name: '插件化多框架',
          path: '/docs/intro',
          icon: 'img/features/plugin.svg',
          description: ['框架插件', '高效瘦身'],
        },
        {
          name: '完整示例文档',
          path: '/docs/quick/install-start',
          icon: 'img/features/doc.svg',
          description: ['类型解释', '用法说明'],
        },
      ],
      [
        {
          name: 'typescript',
          tag: 'tsc check',
          icon: 'img/features/typescript.svg',
          description: ['使用typescript开发', '完整类型定义'],
        },
        {
          name: 'ahooks',
          tag: 'ahooks >= 3.x',
          icon: 'img/features/ahooks.svg',
          description: ['useRequest', '结合ahooks扩展日常需要'],
        },
        {
          name: 'Taro API',
          tag: 'coverage all api',
          icon: 'img/features/taro.svg',
          description: ['全api接入', '完全hook'],
        },
      ],
    ],
  },
};

module.exports = config;

function generateDocsOptions(dir) {
  return {
    editUrl: `${githubURLWithBranch}/${dir}/`,
    showLastUpdateAuthor: true,
    showLastUpdateTime: true,
    sidebarPath: require.resolve('./sidebars.js'),
  };
}
