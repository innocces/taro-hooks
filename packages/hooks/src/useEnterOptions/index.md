---
title: useEnterOptions
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useEnterOptions

获取本次小程序启动时的参数。如果当前是冷启动，则返回值与 App.onLaunch 的回调参数一致；如果当前是热启动，则返回值与 App.onShow 一致

## 何时使用

当要对小程序启动时做参数判断时

## API

```ts
const enterOptions = useEnterOptions();
```

## 返回值说明

| 返回值       | 说明     | 类型           |
| ------------ | -------- | -------------- |
| enterOptions | 启动参数 | `EnterOptions` |

## 代码演示

<code src="useEnterOptions/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
