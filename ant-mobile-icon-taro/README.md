| name                   | version                      | downloads                      |
| ---------------------- | ---------------------------- | ------------------------------ |
| `ant-mobile-icon-taro` | [![NPM version][image-1]][1] | [![NPM downloads][image-2]][2] |

# ant-mobile-icon-taro

不依赖字体的`ant-mobile-icon`. 为适配`taro`. 原理是是将`svg`转换为背图使用.

目前内置了将近 600 的`icon`.

## 使用

下载

```bash
$ npm i ant-mobile-icon-taro
```

由于同时支持`vue`和`react`. 故入口做了特殊处理. 若遇到无法识别类型可自行引入.

```json | pure
{
  "main:react": "lib/index.react.js",
  "main:vue": "lib/index.vue.js",
  "module:react": "es/index.react.js",
  "module:vue": "es/index.vue.js",
  "types:react": "dist/index.react.d.ts",
  "types:vue": "dist/index.vue.d.ts",
  "unpkg:react": "dist/ant-mobile-icon-taro-react.js",
  "unpkg:vue": "dist/ant-mobile-icon-taro-vue.js"
}
```

由于内部是使用`click`. 故使用`Vue`版本的小伙伴若需要支持点击事件需安装对应版本的`@tarojs/plugin-html`, 并在配置中增加:

```js
{
  plugins: ['@tarojs/plugin-html'],
}
```

在对应框架内需要手动指定入口. 具体入口文件如下(任选一种方式即可):

- 使用 alias

```js | pure
// config/index.js
const config = {
  alias: {
    // vue
    'ant-mobile-icon-taro': 'ant-mobile-icon-taro/es/index.vue.js',
    // react
    'ant-mobile-icon-taro': 'ant-mobile-icon-taro/es/index.react.js',
  },
};
```

- 使用[`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import)

```js | pure
// babel.config.js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-mobile-icon-taro',
        camel2DashComponentName: false,
        customName: (name) => {
          // vue
          return 'ant-mobile-icon-taro/es/icons/vue/' + name + '.vue';
          // react
          return 'ant-mobile-icon-taro/es/icons/react/' + name + '.react';
        },
      },
      'ant-mobile-icon-taro',
    ],
  ],
};
```

- 在代码中显示的引用对应版本

```tsx | pure
// vue
import { Home } from 'ant-mobile-icon-taro/es/index.vue';
import Home from 'ant-mobile-icon-taro/es/icons/vue/Home.vue';
// react
import { Home } from 'ant-mobile-icon-taro/es/index.react';
import Home from 'ant-mobile-icon-taro/es/icons/react/Home';
```

由于主流的构建工具会自动做 Tree-Shaking，所以最终被打包进来的只有你用到的那些图标，不必担心包体积问题。

## props

| 属性  | 说明                                                                   | 类型            | 默认值         |
| ----- | ---------------------------------------------------------------------- | --------------- | -------------- |
| size  | 图标大小                                                               | `number`        | `18`           |
| color | 图标颜色                                                               | `string`        | `currentColor` |
| style | 图标额外样式                                                           | `CSSProperties` | `{}`           |
| usePX | 是否强制使用`px`为单位(默认会在内部使用`taro.pxTransform`去转换`size`) | `boolean`       | `false`        |

[1]: https://www.npmjs.com/package/ant-mobile-icon-taro
[2]: https://npmjs.org/package/ant-mobile-icon-taro
[image-1]: https://img.shields.io/npm/v/ant-mobile-icon-taro.svg?style=flat
[image-2]: https://img.shields.io/npm/dm/ant-mobile-icon-taro.svg?style=flat
