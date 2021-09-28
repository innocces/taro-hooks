<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-8-16/1629044969573-hook.png" alt="taro hooks logo"/>
</div>

# Taro-hooks

[![PRs Welcome][image-10]][8][![NPM version][image-1]][1] [![NPM downloads][image-2]][2][![node][image-3]][2][![license][image-4]][2] [![Always ready-to-code.][image-5]][3] [![dumi][image-6]][4][![father-build][image-9]][7] [![][image-7]][5][![Netlify Status][image-8]][6][![lerna][image-11]][9] [![FOSSA Status][image-12]][10]<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)<!-- ALL-CONTRIBUTORS-BADGE:END --> [![GitHub commit activity][image-16]][13] [![GitHub closed issues][image-17]][13] [![GitHub commits since latest release (by date)][image-18]][13] [![GitHub Release Date][image-19]][13][![Install size][image-20]][14] [![brotli][image-21]][15][![][image-22]][15][![][image-23]][16][![][image-24]][16][![][image-25]][12][![][image-26]][13]

## 简介

为`Taro`而设计的`Hooks Library`.

## 文档

[vercel](https://taro-hooks-innocces.vercel.app)

## 使用案例

欢迎大家多多使用, 可将使用案例贡献在[Who are using taro-hooks?](https://github.com/innocces/taro-hooks/issues/4). 我们会在文档和 README 展示出来.

<table>
  <tbody>
    <tr>
      <td align="center">
        <a>
          <img
            width="200"
            src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-8-16/1629044960619-hooks.jpeg"
          />
          <br>
          <strong>Taro-hooks weapp</strong>
        </a>
      </td>
      <td align="center">
        <a target="_blank" href="https://taro-hooks-h5-innocces.vercel.app">
          <img
            height="200"
            style="vertical-align: -0.32em; margin-right: 8px;"
            src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-8-16/1629044960613-hooksite.png"
          />
          <br>
          <strong>Taro-hooks h5</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

## 特性

- 全面匹配`Taro API`.
- 结合`ahooks`扩展常用`hook`.
- 完整的类型定义文件
- 按需加载
- 更易用的方式

## taro init

确保当前`node>=12.x`. 可使用`npx taro init projectname`选择`taro-hooks`模板进行初始化项目.

<video controls autoplay loop preload="auto">
  <source src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-9-11/1631294499323-taro-hooks-templete.mov"></source>
</video>

## 安装

```bash
$ npm i taro-hooks --save
```

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

### WeChat

<img src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-09-28/1632834598048-qrcode.jpeg" alt="wechat code" width="300"/>

### Issuehunt

[![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/repos/379632117)

## CHANGELOG

本项目遵从 [Angular Style Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)，更新日志请查阅 [Release](https://github.com/innocces/taro-hooks/releases), [CHANGELOG](https://github.com/innocces/taro-hooks/blob/main/CHANGELOG.md)。

## License

[MIT@innocces](https://github.com/innocces/taro-hooks/blob/main/LICENSE)

[![FOSSA Status][image-13]][11]

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/innocces"><img src="https://avatars.githubusercontent.com/u/38065966?s=60&v=4?s=50" width="50px;" alt=""/><br /><sub><b>innocces</b></sub></a><br /><a href="#question-innocces" title="Answering Questions">💬</a> <a href="https://github.com/innocces/taro-hooks/commits?author=innocces" title="Documentation">📖</a> <a href="https://github.com/innocces/taro-hooks/pulls?q=is%3Apr+reviewed-by%3Ainnocces" title="Reviewed Pull Requests">👀</a> <a href="#talk-innocces" title="Talks">📢</a> <a href="#ideas-innocces" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/innocces/taro-hooks/commits?author=innocces" title="Tests">⚠️</a> <a href="#platform-innocces" title="Packaging/porting to new platform">📦</a> <a href="#eventOrganizing-innocces" title="Event Organizing">📋</a> <a href="#design-innocces" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[more contributors](https://github.com/innocces/taro-hooks/blob/main/CONTRIBUTORS.md)

## Gitee

[![阿酱/taro-hooks][image-15]][12]

## Sponsor

### Open Collective

[![Open Collective](https://opencollective.com/taro-hooks/tiers/sponsor.svg)](https://opencollective.com/taro-hooks)

### Buy Me A Coffee

<a href="https://www.buymeacoffee.com/innocces" target="_blank"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee 🎉&emoji=&slug=innocces&button_colour=BD5FFF&font_colour=ffffff&font_family=Comic&outline_colour=000000&coffee_colour=FFDD00"></a>

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
[image-1]: https://img.shields.io/npm/v/taro-hooks.svg?style=flat
[image-2]: https://img.shields.io/npm/dm/taro-hooks.svg?style=flat
[image-3]: https://img.shields.io/node/v/taro-hooks.svg?style=flat-square
[image-4]: https://img.shields.io/npm/l/taro-hooks.svg?style=flat-square
[image-5]: https://img.shields.io/badge/Gitpod-ready--to--code-908a85?logo=gitpod
[image-6]: https://img.shields.io/badge/docs%20by-dumi-blue
[image-7]: https://codecov.io/gh/innocces/taro-hooks/branch/main/graph/badge.svg
[image-8]: https://api.netlify.com/api/v1/badges/287ea853-a0e4-4f3a-9733-2ed39ae34d12/deploy-status
[image-9]: https://img.shields.io/badge/build%20by-father-build
[image-10]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[image-11]: https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg
[image-12]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Finnocces%2Ftaro-hooks.svg?type=shield
[image-13]: https://app.fossa.com/api/projects/git%2Bgithub.com%2Finnocces%2Ftaro-hooks.svg?type=large
[image-14]: https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square
[image-15]: https://gitee.com/inocces/taro-hooks/widgets/widget_card.svg?colors=4183c4,ffffff,ffffff,e3e9ed,666666,9b9b9b
[image-16]: https://img.shields.io/github/commit-activity/w/innocces/taro-hooks
[image-17]: https://img.shields.io/github/issues-closed/innocces/taro-hooks
[image-18]: https://img.shields.io/github/commits-since/innocces/taro-hooks/latest/main
[image-19]: https://img.shields.io/github/release-date/innocces/taro-hooks
[image-20]: https://badgen.net/packagephobia/install/taro-hooks
[image-21]: https://badgen.net/bundlephobia/minzip/taro-hooks
[image-22]: https://badgen.net/bundlephobia/tree-shaking/taro-hooks
[image-23]: https://data.jsdelivr.com/v1/package/npm/taro-hooks/badge
[image-24]: https://badgen.net/jsdelivr/v/npm/taro-hooks
[image-25]: https://gitee.com/inocces/taro-hooks/badge/star.svg
[image-26]: https://img.shields.io/github/stars/innocces/taro-hooks?style=flat-square&logo=GitHub
