// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { join } = require('path');
const { readdirSync } = require('fs');
const { version } = require(join(
  process.cwd(),
  '../',
  'packages',
  'hooks',
  'package.json',
));
const navbarItem = require('./navbar');
const prod = process.env.NODE_ENV === 'production';

const siteMap = {
  vercel: 'https://next-version-taro-hooks.vercel.app',
  GH: 'https://innocces.github.io',
  RENDER: 'https://taro-hooks.onrender.com',
};

// env
const buildTarget = process.env.BUILD_TARGET ?? 'vercel';
const gh = buildTarget === 'GH';
const urlPrefix = gh ? '/taro-hooks' : '/site';
const baseURI = siteMap[buildTarget];
const githubURL = 'https://github.com/innocces/taro-hooks';
const githubURLWithBranch = `${githubURL}/edit/next`;
const prevBaseURI = baseURI + (gh ? '/taro-hooks' : '');

const demoPaths = {
  '@vue-demo': 'examples/taro-hooks-plugin-vue/src/pages',
  '@react-demo': 'examples/taro-hooks-plugin/src/pages',
};

const pluginOptionAlias = Object.fromEntries(
  Object.entries(demoPaths).map(([key, path]) => [
    key,
    join(process.cwd(), '..', path),
  ]),
);

function getOptions(vue) {
  const openTarget = Object.fromEntries(
    Object.entries(demoPaths).map(([key, path]) => [
      key,
      `${githubURLWithBranch}/${path}`,
    ]),
  );
  return {
    alias: vue ? pluginOptionAlias['@vue-demo'] : pluginOptionAlias,
    openTarget: vue ? openTarget['@vue-demo'] : openTarget,
    previewOptions: require('./project.env')(prod, prevBaseURI),
  };
}

const packagesPath = join(process.cwd(), '..', 'packages');

const typeDocEntries = readdirSync(packagesPath)
  .filter((v) => !['app', 'blueimp-canvas-to-blob', 'compressorjs'].includes(v))
  .map((v) => join(packagesPath, v));

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
        vue: getOptions(true),
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
        beforeDefaultRemarkPlugins: [[require('./remark/code'), getOptions()]],
      }),
    ],
    // [
    //   'docusaurus-plugin-typedoc',
    //   {
    //     entryPoints: typeDocEntries,
    //     entryPointStrategy: 'packages',
    //     // watch: process.env.TYPEDOC_WATCH,
    //     logLevel: 'Verbose',
    //     name: 'All - TypeDoc',
    //     readme: 'none',
    //     gitRevision: 'next',
    //     cleanOutputDir: !prod,

    //     sidebar: {
    //       categoryLabel: 'TypeDoc',
    //       position: 10,
    //       fullNames: true,
    //     },
    //   },
    // ],
    prod && [
      'pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/hook.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#792be4',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/hook.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/hook.png',
            color: '#792be4',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/hook.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
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
              label: `V${version.split('+')[0]} 👻`,
            },
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: `${githubURLWithBranch}/website/`,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Innocces, Inc.`,
          },
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
                label: 'Discord',
                href: 'https://discord.gg/XrrbdDCpKg',
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
                label: 'dumi-theme-chakra',
                href: 'https://github.com/innocces/dumi-theme-chakra',
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
            <a target="__blank" href="https://github.com/innocces/taro-hooks/tree/next"><b>taro-hooks@2</b> 代号: Serro👻</a> 正式发布 🎉
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
        appId: 'HIV804W7Z6',
        apiKey: '409a0690d65dac63b8f71447f88083fe',
        indexName: 'taro-hooks',
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

  // themes: [
  //   [
  //     require.resolve('@easyops-cn/docusaurus-search-local'),
  //     {
  //       hashed: true,
  //       language: ['en', 'zh'],
  //       highlightSearchTermsOnTargetPage: true,
  //       explicitSearchResultPath: true,
  //       docsDir: ['docs', '../packages/hooks/src'],
  //     },
  //   ],
  // ],

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
