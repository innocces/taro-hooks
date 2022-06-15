[回到旧版](https://github.com/innocces/taro-hooks/tree/main) |

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-8-16/1629044969573-hook.png" alt="taro hooks logo"/>

#### 为 **Taro** 而设计的 **Hooks Library**

  <br />

[![PRs Welcome][image-10]][8] [![license][image-4]][2] [![FOSSA Status][image-12]][10]

[![NPM version][image-1]][1] [![node][image-3]][2] [![brotli][image-21]][15] [![][image-22]][15]

[![NPM downloads][image-2]][2] [![][image-23]][16]

[![Always ready-to-code.][image-5]][3] [![][image-7]][5]

[![lerna][image-11]][9]<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=for-the-badge)](#contributors-)

  <!-- ALL-CONTRIBUTORS-BADGE:END -->

[![GitHub commit activity][image-16]][13] [![GitHub closed issues][image-17]][13] [![GitHub commits since latest release (by date)][image-18]][13] [![GitHub Release Date][image-19]][13]

|                                                          packages                                                           |                                                  downloads                                                  |                                                version                                                 |                                                license                                                 |
| :-------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|                 ![taro-hooks](https://img.shields.io/badge/taro--hooks-pkg-blueviolet?style=for-the-badge)                  |               ![taro-hooks](https://img.shields.io/npm/dm/taro-hooks.svg?style=for-the-badge)               |               ![taro-hooks](https://img.shields.io/npm/v/taro-hooks?style=for-the-badge)               |               ![taro-hooks](https://img.shields.io/npm/l/taro-hooks?style=for-the-badge)               |
|       ![@taro-hooks/ahooks](https://img.shields.io/badge/%40taro--hooks%2Fahooks-pkg-blueviolet?style=for-the-badge)        |       ![@taro-hooks/ahooks](https://img.shields.io/npm/dm/@taro-hooks/ahooks.svg?style=for-the-badge)       |       ![@taro-hooks/ahooks](https://img.shields.io/npm/v/@taro-hooks/ahooks?style=for-the-badge)       |       ![@taro-hooks/ahooks](https://img.shields.io/npm/l/@taro-hooks/ahooks?style=for-the-badge)       |
|   ![@taro-hooks/plugin-vue](https://img.shields.io/badge/%40taro--hooks%2Fplugin--vue-pkg-blueviolet?style=for-the-badge)   |   ![@taro-hooks/plugin-vue](https://img.shields.io/npm/dm/@taro-hooks/plugin-vue.svg?style=for-the-badge)   |   ![@taro-hooks/plugin-vue](https://img.shields.io/npm/v/@taro-hooks/plugin-vue?style=for-the-badge)   |   ![@taro-hooks/plugin-vue](https://img.shields.io/npm/l/@taro-hooks/plugin-vue?style=for-the-badge)   |
| ![@taro-hooks/plugin-react](https://img.shields.io/badge/%40taro--hooks%2Fplugin--react-pkg-blueviolet?style=for-the-badge) | ![@taro-hooks/plugin-react](https://img.shields.io/npm/dm/@taro-hooks/plugin-react.svg?style=for-the-badge) | ![@taro-hooks/plugin-react](https://img.shields.io/npm/v/@taro-hooks/plugin-react?style=for-the-badge) | ![@taro-hooks/plugin-react](https://img.shields.io/npm/l/@taro-hooks/plugin-react?style=for-the-badge) |
|  ![@taro-hooks/use-request](https://img.shields.io/badge/%40taro--hooks%2Fuse--request-pkg-blueviolet?style=for-the-badge)  |  ![@taro-hooks/use-request](https://img.shields.io/npm/dm/@taro-hooks/use-request.svg?style=for-the-badge)  |  ![@taro-hooks/use-request](https://img.shields.io/npm/v/@taro-hooks/use-request?style=for-the-badge)  |  ![@taro-hooks/use-request](https://img.shields.io/npm/l/@taro-hooks/use-request?style=for-the-badge)  |

</div>

[文档](https://next-version-taro-hooks.vercel.app/)

## 特性

- 全面匹配`Taro API`.
- **Vue3** & **React**
- 结合`ahooks`扩展常用`hook`.
- 完整的类型定义文件
- 按需加载
- 更易用的方式

## taro init

确保当前`node>=12.x`. 可使用`npx taro init projectname`选择`taro-hooks`模板进行初始化项目.

## 安装

```bash
$ npm i taro-hooks --save
```

配合框架需要特别的插件配置, 请移步[文档 - 框架支持](https://next-version-taro-hooks.vercel.app/site/docs/intro#%E6%A1%86%E6%9E%B6%E6%94%AF%E6%8C%81)

## 使用

```jsx
import { useEnv } from 'taro-hooks';
```

注: `taro-hooks`的`js`代码默认支持基于`ES modules`的`tree shaking`. 但你依然可以显式的使用[`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import)去设置按需加载, 设置方式如下:

```js
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'taro-hooks',
        camel2DashComponentName: false,
      },
      'taro-hooks',
    ],
  ],
};
```

## 参与贡献

务必保证预装`lerna`

```bash
$ git clone git@github.com:innocces/taro-hooks.git
$ cd taro-hooks
$ yarn bootstrap
$ yarn start
# 启动小程序预览
$ yarn app:dev
# 启动H5预览
$ yarn app:dev:h5
```

打开浏览器 - [http://localhost:12345](http://localhost:12345)  
若开启 h5 预览 - [http://0.0.0.0:10086](http://0.0.0.0:10086)  
更多贡献详情见[官网文档](https://taro-hooks-innocces.vercel.app)

> 注: `packages/taro-runtime`是为了配合文档单独使用生命周期 hook 独立保存的。遇更新会随时更新。无需关心。
> `father-build`同理。

## 交流讨论

- [![Gitter](https://img.shields.io/badge/chat-on%20gitter-blueviolet?style=for-the-badge)](https://gitter.im/hooks/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)
- 点击[Welcome to discuss in wechat](https://github.com/innocces/taro-hooks/issues/12)获取最新二维码

### monthly

每个月都会发一篇关于`taro-hooks`的更新内容. 可至[monthly](https://github.com/taro-hooks/monthly)查看全部内容.

## CHANGELOG

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志请查阅 [Release](https://github.com/innocces/taro-hooks/releases), [CHANGELOG](https://github.com/innocces/taro-hooks/blob/main/CHANGELOG.md)。

## 友情推荐

| 项目                                              | 描述                                                                                                                |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [taroify](https://github.com/mallfoundry/taroify) | Taroify 是移动端组件库 Vant 的 Taro 版本，两者基于相同的视觉规范，提供一致的 API 接口，助力开发者快速搭建小程序应用 |

## License

[MIT@innocces](https://github.com/innocces/taro-hooks/blob/next/LICENSE)

[![FOSSA Status][image-13]][11]

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/innocces"><img src="https://avatars.githubusercontent.com/u/38065966?s=60&v=4?s=50" width="50px;" alt=""/><br /><sub><b>innocces</b></sub></a><br /><a href="#question-innocces" title="Answering Questions">💬</a> <a href="https://github.com/innocces/taro-hooks/commits?author=innocces" title="Documentation">📖</a> <a href="https://github.com/innocces/taro-hooks/pulls?q=is%3Apr+reviewed-by%3Ainnocces" title="Reviewed Pull Requests">👀</a> <a href="#talk-innocces" title="Talks">📢</a> <a href="#ideas-innocces" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/innocces/taro-hooks/commits?author=innocces" title="Tests">⚠️</a> <a href="#platform-innocces" title="Packaging/porting to new platform">📦</a> <a href="#eventOrganizing-innocces" title="Event Organizing">📋</a> <a href="#design-innocces" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/ryan-117"><img src="https://avatars.githubusercontent.com/u/24773896?v=4?s=50" width="50px;" alt=""/><br /><sub><b>ryan</b></sub></a><br /><a href="https://github.com/innocces/taro-hooks/commits?author=ryan-117" title="Documentation">📖</a> <a href="#talk-ryan-117" title="Talks">📢</a> <a href="#ideas-ryan-117" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/innocces/taro-hooks/commits?author=ryan-117" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[more contributors](https://github.com/innocces/taro-hooks/blob/main/CONTRIBUTORS.md)

## Sponsor

| platform        | link                                                                                                                                                                                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Open Collective | [![Open Collective](https://opencollective.com/taro-hooks/tiers/sponsor.svg)](https://opencollective.com/taro-hooks)                                                                                                                                                       |
| Buy Me A Coffee | <a href="https://www.buymeacoffee.com/innocces" target="_blank"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee 🎉&emoji=&slug=innocces&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00"></a> |
| Issuehunt       | [![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/repos/379632117)                                                                                                                                 |

[1]: https://www.npmjs.com/package/taro-hooks
[2]: https://npmjs.org/package/taro-hooks
[3]: https://gitpod.io/#https://github.com/innocces/taro-hooks
[4]: https://github.com/umijs/dumi
[5]: https://codecov.io/gh/innocces/taro-hooks
[6]: https://app.netlify.com/sites/taro-hooks/deploys
[7]: https://www.npmjs.com/package/father-build
[8]: http://makeapullrequest.com
[9]: https://lerna.js.org/
[10]: https://app.fossa.com/projects/git%2Bgithub.com%2Finnocces%2Ftaro-hooks?ref=badge_shield
[11]: https://app.fossa.com/projects/git%2Bgithub.com%2Finnocces%2Ftaro-hooks?ref=badge_large
[12]: https://gitee.com/inocces/taro-hooks
[13]: https://github.com/innocces/taro-hooks
[14]: https://packagephobia.now.sh/result?p=taro-hooks
[15]: https://bundlephobia.com/result?p=taro-hooks
[16]: https://www.jsdelivr.com/package/npm/taro-hooks
[image-1]: https://img.shields.io/npm/v/taro-hooks.svg?style=for-the-badge
[image-2]: https://img.shields.io/npm/dm/taro-hooks.svg?style=for-the-badge
[image-3]: https://img.shields.io/node/v/taro-hooks.svg?style=for-the-badge
[image-4]: https://img.shields.io/npm/l/taro-hooks.svg?style=for-the-badge
[image-5]: https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod&style=for-the-badge
[image-7]: https://img.shields.io/codecov/c/gh/innocces/taro-hooks?style=for-the-badge
[image-10]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge
[image-11]: https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=for-the-badge
[image-12]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Finnocces%2Ftaro-hooks.svg
[image-13]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Finnocces%2Ftaro-hooks.svg?type=large
[image-14]: https://img.shields.io/badge/all_contributors-13-orange.svg?style=for-the-badge
[image-15]: https://gitee.com/inocces/taro-hooks/widgets/widget_card.svg?colors=4183c4,ffffff,ffffff,e3e9ed,666666,9b9b9b&style=for-the-badge
[image-16]: https://img.shields.io/github/commit-activity/y/innocces/taro-hooks/next?style=for-the-badge
[image-17]: https://img.shields.io/github/issues-closed/innocces/taro-hooks?style=for-the-badge
[image-18]: https://img.shields.io/github/commits-since/innocces/taro-hooks/latest/next?style=for-the-badge
[image-19]: https://img.shields.io/github/release-date/innocces/taro-hooks?style=for-the-badge
[image-20]: https://img.shields.io/packagephobia/install/taro-hooks
[image-21]: https://img.shields.io/bundlephobia/minzip/taro-hooks?style=for-the-badge
[image-22]: https://img.shields.io/badge/tree--shaking-support-blue?style=for-the-badge
[image-23]: https://img.shields.io/jsdelivr/npm/hm/taro-hooks?style=for-the-badge
[image-24]: https://img.shields.io/jsdelivr/v/npm/taro-hooks
[image-25]: https://gitee.com/inocces/taro-hooks/badge/star.svg
[image-26]: https://img.shields.io/github/stars/innocces/taro-hooks?style=for-the-badge&logo=GitHub
