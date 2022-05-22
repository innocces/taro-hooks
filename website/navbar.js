const latestStabVersion = 'V1.5.8';

module.exports = [
  {
    type: 'doc',
    docId: 'intro',
    position: 'left',
    label: '文档',
  },
  { to: '/blog', label: '博客', position: 'left' },
  {
    type: 'docsVersionDropdown',
    position: 'right',
    dropdownActiveClassDisabled: true,
    dropdownItemsAfter: [
      {
        type: 'html',
        value: '<hr class="dropdown-separator">',
      },
      {
        href: 'https://taro-hooks-innocces.vercel.app',
        label: latestStabVersion,
      },
    ],
  },
  {
    href: 'https://github.com/innocces/taro-hooks',
    position: 'right',
    className: 'header-nav-link header-github-link',
    'aria-label': 'GitHub repository',
  },
  {
    href: 'https://gitee.com/inocces/taro-hooks',
    position: 'right',
    className: 'header-nav-link icon-gitee',
    'aria-label': 'GiTee repository',
  },
];
