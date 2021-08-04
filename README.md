<div align="center">
  <img src="https://github.com/innocces/taro-hooks/blob/main/public/image/hook.png" alt="taro hooks logo"/>
</div>

# Taro-hooks

[![PRs Welcome][image-10]](8)[![NPM version][image-1]][1] [![NPM downloads][image-2]][2][![node][image-3]][2][![license][image-4]][2] [![Always ready-to-code.][image-5]][3] [![dumi][image-6]][4][![father-build][image-9]][7] [![][image-7]][5][![Netlify Status][image-8]][6][![lerna][image-11]]([9])

## 简介

为`Taro`而设计的`Hooks Library`.

## 文档

[传送门](https://innocces.github.io/taro-hooks)  
[netlify](https://taro-hooks.netlify.app)  
[vercel](https://taro-hooks.vercel.app)

## 使用案例

<table>
  <tbody>
    <tr>
      <td align="center">
        <a>
          <img
            width="200"
            src="https://github.com/innocces/taro-hooks/blob/main/public/image/hooks.jpeg"
          />
          <br>
          <strong>Taro-hooks weapp</strong>
        </a>
      </td>
      <td align="center">
        <a target="_blank" href="https://taro-hooks-h5.vercel.app">
          <img
            height="200"
            style="vertical-align: -0.32em; margin-right: 8px;"
            src="https://github.com/innocces/taro-hooks/blob/main/public/image/hooksite.png"
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
- 更易用的方式

## 安装

```bash
$ npm i taro-hooks --save
```

## 使用

```jsx
import { useEnv } from 'taro-hooks';
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
更多贡献详情见[官网文档](https://taro-hooks.vercel.app)

> 注: `packages/taro-runtime`是为了配合文档单独使用生命周期 hook 独立保存的。遇更新会随时更新。无需关心。`father-build`同理。

## 交流讨论

<img src="" alt="wechat code" width="300"/>

## License

[MIT](./LICENSE)

[1]: https://www.npmjs.com/package/taro-hooks
[2]: https://npmjs.org/package/taro-hooks
[3]: https://gitpod.io/#https://github.com/innocces/taro-hooks
[4]: https://github.com/umijs/dumi
[5]: https://codecov.io/gh/innocces/taro-hooks
[6]: https://app.netlify.com/sites/taro-hooks/deploys
[7]: https://www.npmjs.com/package/father-build
[8]: http://makeapullrequest.com
[9]: https://lerna.js.org/
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
