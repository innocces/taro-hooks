---
title: useRendererUserAgent
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useRendererUserAgent

获取 Webview 小程序的 UserAgent

## 何时使用

当需要获取 Webview 小程序的 UserAgent

## API

```jsx | pure
const rendererUserAgent = useRendererUserAgent();
```

## 参数说明

无

## 返回值说明

| 参数   | 类型     | 说明                       |
| ------ | -------- | -------------------------- | --- |
| result | `string` | Webview 小程序的 UserAgent |     |

## 代码演示

<code src="useSystemInfo/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
