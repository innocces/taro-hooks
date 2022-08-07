---
title: useLaunchOptions
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useLaunchOptions

获取小程序启动时参数(仅小程序端可用)

## 何时使用

当要对小程序启动时做参数判断时

## API

```ts
const launchOptions = useLaunchOptions();
```

## 返回值说明

| 返回值        | 说明     | 类型               |
| ------------- | -------- | ------------------ |
| launchOptions | 启动参数 | `LaunchAppOptions` |

## 代码演示

<code src="useLaunchOptions/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
