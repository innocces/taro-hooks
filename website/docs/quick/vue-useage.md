---
title: Vue 教程
sidebar_position: 3
---

:::caution

下面的内容都建立在拥有足够的**Vue3** 和 **React-hooks** 的基础上. 若还对前面叙述的不清楚的可以先了解一下

:::

## 概述

**taro-hooks** 支持 **Vue3** 的方式为插件化. 使用插件模拟对应的常用 **React-hooks**. 当然, 如果你不想使用 **taro-hooks**. 但想要在 **Vue3** 中体验 **React-hooks**. 可以使用下面的插件.

## 配置

### 安装插件

首先需要下载 **@taro-hooks/plugin-vue** 插件

```bash
$ npm i @taro-hooks/plugin-vue
```

> 建议您同时下载 **@taro-hooks/shared** 插件用于转换一些等同状态的 **state**

```bash
$ npm i @taro-hooks/shared
```

### 项目配置

```js title="config/index.js"
const config = {
  // ...
  plugins: ['@taro-hooks/plugin-vue'],
  // ...
};
```

> 注意: 插件内部会检测当前项目的框架和依赖状态, 若您的项目不是 **Vue3** 的项目, 那么很可能无法正常启动.

## **Hooks**

所有的 **Hooks** 均在运行时注入到了 **@tarojs/taro** 内部, 并使用了 **useTaro** 的标准前缀.

```html title="example/index.vue"
<script>
  import {
    useTaroState,
    useTaroEffect,
    useTaroRef,
    useTaroReducer,
    useTaroCallback,
    useTaroMemo,
    useTaroLayoutEffect,
    useTaroContext,
    useWatchEffect,
    taroCreateContext,
  } from '@tarojs/taro';

  export default {
    setup() {
      // use hooks in setup
    },
  };
</script>
```

:::tip

下面的 **Hook** 使用示例尽可能的和 **React** 教程保持了一致. 方便 **React** 开发的同学阅读

:::

### **useTaroState**

**useTaroState** 帮助您快速创建一个响应式数据和更改它的方法  
但这里需要注意的是, 它内部使用的是 **Ref**. 在 **template** 内会被自动解包. 但在 **setup** 内使用依然需要显式的使用 **state.value** 来获取值. 当然我们也提供了一个工具来抹平差异. 在下面的示例中有体现
