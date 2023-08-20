<p align="center">
  <a href="https://next-version-taro-hooks.vercel.app" target="_blank" rel="noopener noreferrer">
    <img style="max-width: 100%" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2021-8-16/1629044969573-hook.png" alt="taro hooks logo" />
  </a>
  <br />
  <h3 align="center">
  <span>
    <a>V2</a> | 
    <a href="https://github.com/innocces/taro-hooks/tree/main" target="_blank" rel="noopener noreferrer">V1</a>
  </span>
  <h3>
</p>
<br />
<p align="center">
  <a href="https://www.npmjs.com/package/taro-hooks"><img src="https://img.shields.io/npm/v/taro-hooks?color=%23a773ed" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/taro-hooks?color=%23a773ed" alt="node compatibility"></a>
  <a href="https://github.com/innocces/taro-hooks/actions/workflows/gh-pages.yml"><img src="https://github.com/innocces/taro-hooks/actions/workflows/gh-pages.yml/badge.svg?branch=next" alt="build status"></a>
  <a href="https://discord.gg/N82HK72uJk"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord&color=%23a773ed" alt="discord chat"></a>
  <a href="https://next-version-taro-hooks.vercel.app"><img alt="vercel" src="https://img.shields.io/badge/MADE%20BY%20Vercel-000000.svg?logo=Vercel&labelColor=000" /></a>
</p>
<br />
<div align="center">
  <p>Hooks Library for Taro<p>
</div>

## ✨ Features

- Fully matched Taro
- Extending common hooks with ahooks
- Separate abstraction useRequest
- Complete type tips
- Extended h5 missing apis

## 🚀 Quick Start

```bash
# npm
$ npm i taro-hooks
# yarn
$ yarn add taro-hooks
# pnpm
$ pnpm add taro-hooks
```

We use plugins for extending different frameworks. So you need to install the corresponding plugins according to the framework you are currently using

- React/PReact/Nerv

```bash
# npm
$ npm i @taro-hooks/plugin-react
# yarn
$ yarn add @taro-hooks/plugin-react
# pnpm
$ pnpm add @taro-hooks/plugin-react
```

```js
// config/index.js
module.exports = {
  // ...
  plugins: ['@taro-hooks/plugin-react'],
  // ...
};
```

- Vue3

```bash
# npm
$ npm i @taro-hooks/plugin-vue
# yarn
$ yarn add @taro-hooks/plugin-vue
# pnpm
$ pnpm add @taro-hooks/plugin-vue
```

```js
// config/index.js
module.exports = {
  // ...
  plugins: ['@taro-hooks/plugin-vue'],
  // ...
};
```

## ⌨️ Usage

- React/PReact/Nerv

```jsx
import { useEnv } from 'taro-hooks';

function Index() {
  const env = useEnv();

  return <View>current env: {env}</View>;
}
```

- Vue3

```html
<template>
  <view>current env: {{env}}</view>
</template>

<script setup lang="ts">
  import { useEnv } from 'taro-hooks';

  const env = useEnv();
</script>
```

## 🎰 auto-import

We provide the @taro-hooks/plugin-auto-import plugin to help you quickly use the [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) capability.

```bash
# npm
$ npm i @taro-hooks/plugin-auto-import
# yarn
$ yarn add @taro-hooks/plugin-auto-import
# pnpm
$ pnpm add @taro-hooks/plugin-auto-import
```

```js
// config/index.js
const config = {
  // ...
  // The main prerequisite is that you have installed the plugin for the corresponding framework.
  plugins: [
    // If you are using vue3, please install the @taro-hooks/plugin-vue plugin beforehand.
    '@taro-hooks/plugin-vue'，
    // If using React/PReact/Nerv, please pre-install the @taro-hooks/plugin-react plugin.
    '@taro-hooks/plugin-react',
    // Finally, the auto-import plugin is configured
    [
      '@taro-hooks/plugin-auto-import',
      {
        // your options, see configuration: https://github.com/antfu/unplugin-auto-import#configuration
      }
    ]
  ],
  // ...
};
```

- React/PReact/Nerv

```jsx
function Index() {
  const env = useEnv();

  return <View>current env: {env}</View>;
}
```

- Vue3

```html
<template>
  <view>current env: {{env}}</view>
</template>

<script setup lang="ts">
  const env = useEnv();
</script>
```

## 📦 Packages

|                                                       packages                                                        |                                              downloads                                              |                                             version                                             |                                             license                                             |
| :-------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
|                        ![taro-hooks](https://img.shields.io/badge/taro--hooks-pkg-blueviolet?)                        |                     ![taro-hooks](https://img.shields.io/npm/dm/taro-hooks.svg)                     |                     ![taro-hooks](https://img.shields.io/npm/v/taro-hooks?)                     |                     ![taro-hooks](https://img.shields.io/npm/l/taro-hooks?)                     |
|              ![@taro-hooks/ahooks](https://img.shields.io/badge/%40taro--hooks%2Fahooks-pkg-blueviolet?)              |             ![@taro-hooks/ahooks](https://img.shields.io/npm/dm/@taro-hooks/ahooks.svg)             |             ![@taro-hooks/ahooks](https://img.shields.io/npm/v/@taro-hooks/ahooks?)             |             ![@taro-hooks/ahooks](https://img.shields.io/npm/l/@taro-hooks/ahooks?)             |
|         ![@taro-hooks/plugin-vue](https://img.shields.io/badge/%40taro--hooks%2Fplugin--vue-pkg-blueviolet?)          |         ![@taro-hooks/plugin-vue](https://img.shields.io/npm/dm/@taro-hooks/plugin-vue.svg)         |         ![@taro-hooks/plugin-vue](https://img.shields.io/npm/v/@taro-hooks/plugin-vue?)         |         ![@taro-hooks/plugin-vue](https://img.shields.io/npm/l/@taro-hooks/plugin-vue?)         |
|       ![@taro-hooks/plugin-react](https://img.shields.io/badge/%40taro--hooks%2Fplugin--react-pkg-blueviolet?)        |       ![@taro-hooks/plugin-react](https://img.shields.io/npm/dm/@taro-hooks/plugin-react.svg)       |       ![@taro-hooks/plugin-react](https://img.shields.io/npm/v/@taro-hooks/plugin-react?)       |       ![@taro-hooks/plugin-react](https://img.shields.io/npm/l/@taro-hooks/plugin-react?)       |
|        ![@taro-hooks/use-request](https://img.shields.io/badge/%40taro--hooks%2Fuse--request-pkg-blueviolet?)         |        ![@taro-hooks/use-request](https://img.shields.io/npm/dm/@taro-hooks/use-request.svg)        |        ![@taro-hooks/use-request](https://img.shields.io/npm/v/@taro-hooks/use-request?)        |        ![@taro-hooks/use-request](https://img.shields.io/npm/l/@taro-hooks/use-request?)        |
| ![@taro-hooks/plugin-auto-import](https://img.shields.io/badge/%40taro--hooks%2Fplugin--auto--import-pkg-blueviolet?) | ![@taro-hooks/plugin-auto-import](https://img.shields.io/npm/dm/@taro-hooks/plugin-auto-import.svg) | ![@taro-hooks/plugin-auto-import](https://img.shields.io/npm/v/@taro-hooks/plugin-auto-import?) | ![@taro-hooks/plugin-auto-import](https://img.shields.io/npm/l/@taro-hooks/plugin-auto-import?) |

## 🗨️ Communication

<table>
  <tr align="center">
    <td>
      <a href="https://github.com/innocces/taro-hooks/issues/12" target="_blank">
        <img width="50" src="https://api.iconify.design/fa:wechat.svg?color=%2300dd66">
      </a>
    </td>
    <td>
      <a href="https://discord.gg/N82HK72uJk" target="_blank">
        <img width="50" src="https://api.iconify.design/logos:discord-icon.svg?color=%23888888">
      </a>
    </td>
    <td>
      <a href="https://t.me/+liVrD6TyPV1lZmJl" target="_blank">
        <img width="50" src="https://api.iconify.design/logos:telegram.svg?color=%23888888">
      </a>
    </td>
  </tr>
</table>

## 🤸 Contribution

See [Contributing Guide](CONTRIBUTING.md).

## 🍻 Contributors

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

## 📑 License

[MIT](LICENSE).

## 💰 Sponsoring

<table>
  <tr align="center">
    <td>
      <a href="https://www.buymeacoffee.com/innocces" target="_blank">
        <img width="120" src="https://api.iconify.design/simple-icons:buymeacoffee.svg">
      </a>
    </td>
    <td>
      <a href="https://afdian.net/a/innocces" target="_blank">
        <img width="150" src="https://cdn.jsdelivr.net/gh/innocces/DrawingBed/2022-12-04/1670124736895-afdian.png">
      </a>
    </td>
  </tr>
</table>

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=innocces/taro-hooks&type=Date)](https://star-history.com/#innocces/taro-hooks&Date)
