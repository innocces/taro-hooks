---
title: AutoImport 教程
sidebar_position: 4
---

## 概述

**@taro-hooks/plugin-auto-import** 是内置了 **taro-hooks preset** 的 **unplugin-auto-import** 的 **taro** 插件. 帮助大家无需再每个页面引入 **taro-hooks** 而 快捷使用我们提供的 **hooks**

## 配置

### 安装 **taro-hooks**

```bash
# npm
$ npm i taro-hooks
# yarn
$ yarn add taro-hooks
# pnpm
$ pnpm add taro-hooks
```

### 安装插件

首先需要下载 **@taro-hooks/plugin-auto-import** 插件

```bash
# npm
$ npm i @taro-hooks/plugin-auto-import
# yarn
$ yarn add @taro-hooks/plugin-auto-import
# pnpm
$ pnpm add @taro-hooks/plugin-auto-import
```

### 项目配置

```js title="config/index.js"
const config = {
  // ...
  // 主要前提是您已经安装了对应框架的插件
  plugins: [
    // 若使用 vue3, 请预先安装 @taro-hooks/plugin-vue 插件
    '@taro-hooks/plugin-vue'，
    // 若使用 React/PReact/Nerv, 请预先安装 @taro-hooks/plugin-react 插件
    '@taro-hooks/plugin-react',
    // 最后配置 auto-import 插件 (此为直接使用不需要客制化的情况)
    '@taro-hooks/plugin-auto-import'
  ],
  // ...
};
```

若您需要渗透配置至 [**unplugin-auto-import**](https://github.com/antfu/unplugin-auto-import) 中. 可直接在第二个参数中传递需要渗透的 [**Options**](https://github.com/antfu/unplugin-auto-import#configuration)

```js title="config/index.js"
const config = {
  // ...
  // 主要前提是您已经安装了对应框架的插件
  plugins: [
    // 若使用 vue3, 请预先安装 @taro-hooks/plugin-vue 插件
    '@taro-hooks/plugin-vue'，
    // 若使用 React/PReact/Nerv, 请预先安装 @taro-hooks/plugin-react 插件
    '@taro-hooks/plugin-react',
    // 最后配置 auto-import 插件
    [
      '@taro-hooks/plugin-auto-import',
      {
        // your options
      }
    ]
  ],
  // ...
};
```

## 使用

我们在插件中已经配置好了 **taro-hooks** 相关的 **importMap**. 故您现在无需引用即可在项目中使用

### React/PReact/Nerv

```jsx
function Index() {
  const env = useEnv();

  return <View>current env: {env}</View>;
}
```

### Vue3

```html
<template>
  <view>current env: {{env}}</view>
</template>

<script setup lang="ts">
  const env = useEnv();
</script>
```

## 原理

插件依赖了 **taro-hooks** 包中产出的 **metadata.json** 元数据文件. 若您需要高度自定义. 可使用该文件完成自定义的 **ImportMap**.

详细代码见: [**plugin-auto-import**](https://github.com/innocces/taro-hooks/blob/next/packages/plugin-auto-import/src/index.ts#L23)
