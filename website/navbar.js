const latestStabVersion = 'V1.5.9';

module.exports = [
  {
    type: 'doc',
    docId: 'intro',
    position: 'left',
    label: '文档',
  },
  { to: '/hooks/intro', label: 'Hooks', position: 'left' },
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
        type: 'html',
        value:
          '<a target="__blank" href="https://taro-hooks-innocces.vercel.app"><img src="https://badgen.net/npm/v/taro-hooks/1" /></a>',
      },
    ],
  },
  {
    href: 'https://discord.gg/XrrbdDCpKg',
    position: 'right',
    className: 'header-nav-link header-discord-link',
    'aria-label': 'Discord link',
  },
  {
    href: 'https://github.com/innocces/taro-hooks/tree/next',
    position: 'right',
    className: 'header-nav-link header-github-link',
    'aria-label': 'GitHub repository',
  },
  {
    href: 'https://gitee.com/inocces/taro-hooks/tree/next',
    position: 'right',
    className: 'header-nav-link icon-gitee',
    'aria-label': 'GiTee repository',
  },
];
