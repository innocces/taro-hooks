module.exports = [
  {
    type: 'doc',
    docId: 'intro',
    position: 'left',
    label: 'Tutorial',
  },
  { to: '/blog', label: 'Blog', position: 'left' },
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
