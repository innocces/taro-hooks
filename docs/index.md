---
hero:
  title: Taro-hooks
  desc: 为 Taro 而设计的 Hooks Library
  actions:
    - text: 快速上手
      link: /quick
features:
  - icon: https://taro.zone/static/images/icon_community.svg
    title: 全面匹配
    desc: 对标Taro API开发
  - icon: https://ahooks.js.org/logo.svg
    title: 结合ahook
    desc: 使用ahook拓展对应能力
  - icon: https://taro.zone/static/images/icon_component.svg
    title: 类型定义
    desc: 使用typescript开发, 完整的类型定义方便开发
footer: Open-source [MIT Licensed](https://github.com/innocces/taro-hooks/blob/main/LICENSE) | Copyright © 2021<br />Powered by [taro-hooks](https://github.com/innocces/taro-hooks)
---

## 轻松使用

1. 安装依赖

```bash
$ npm i taro-hooks --save
```

2. 使用

```jsx | pure
import { useEnv } from 'taro-hooks';
```

注: `taro-hooks`的`js`代码默认支持基于`ES modules`的`tree shaking`. 但你依然可以显式的使用[`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import)去设置按需加载, 设置方式如下:

```js | pure
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

3. taro-init

<embed src="../packages/hooks/README.md#L57-L63"></embed>

## 使用案例

<table>
  <tbody>
    <tr>
      <td align="center">
        <a>
          <img
            width="200"
            src="/image/hooks.jpeg"
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
            src="/image/hooksite.png"
          />
          <br>
          <strong>Taro-hooks h5</strong>
        </a>
      </td>
    </tr>
  </tbody>
</table>

<embed src="../packages/hooks/README.md#L118-L210"></embed>
