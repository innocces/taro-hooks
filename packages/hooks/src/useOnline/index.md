---
title: useOnline
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 网络
  path: /network
---

<Alert><code>useNetworkType</code>衍生 hook, 方便用户是否需要判断当前网络是否可用. 初始值为<code>undefined</code>.若业务中可做初始判空处理. 且该状态为自动监听</Alert>

# useOnline

获取网络是否可用

## 何时使用

当需要根据当前网络状态做判断时

## API

```jsx | pure
const online: boolean = useOnline();
```

## 返回值说明

| 返回值 | 说明         | 类型      |
| ------ | ------------ | --------- |
| online | 当前网络状态 | `boolean` |

## 代码演示

<code src="@pages/useOnline" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
