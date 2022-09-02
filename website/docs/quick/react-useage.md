---
title: React 教程
sidebar_position: 2
---

## 概述

**taro-hooks** 为了支持 **Vue3** 并使代码达到统一. 使用插件将原来的 **React hooks** 提取并注入到了 **@tarojs/taro** 中

## 配置

### 安装插件

首先需要下载 **@taro-hooks/plugin-react** 插件

```bash
$ npm i @taro-hooks/plugin-react@canary
```

### 项目配置

```js title="config/index.js"
const config = {
  // ...
  plugins: ['@taro-hooks/plugin-react'],
  // ...
};
```

> 注意: 插件内部会检测当前项目的框架和依赖状态, 若您的项目不是 **React** 的项目, 那么很可能无法正常启动.

## **Hooks**

所有的 **Hooks** 均在运行时注入到了 **@tarojs/taro** 内部, 并使用了 **useTaro** 的标准前缀.

```tsx title="example/index.tsx" showLineNumbers
import React from 'react';
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

export default function App() {
  const [count, setCount] = useTaroState(0);

  return <view onClick={() => setCount(count + 1)}>{count}</view>;
}
```
