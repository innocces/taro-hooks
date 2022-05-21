module.exports = [
  {
    type: 'doc',
    docId: 'intro',
    position: 'left',
    label: '文档',
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
  {
    href: 'https://taro-hooks-innocces.vercel.app',
    position: 'right',
    label: '1.x',
    'aria-label': 'v1.x',
  },
];
