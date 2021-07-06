---
title: useRequest
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 网络
  path: /network
---

<Alert>注意: 该 Hook 是改写自<a target="__blank" href="https://ahooks.js.org/zh-CN/hooks/async">ahook useRequest</a>, 更贴合 Taro 使用。demo 基本和原 hook 保持一致。</Alert>

# useRequest

数据请求

## 何时使用

当需要和服务端进行数据交换时

## API

```jsx | pure
() => Taro.ENV_TYPE;
```

## 返回值说明

| 返回值 | 说明       | 类型       |
| ------ | ---------- | ---------- |
| env    | 当前环境值 | `ENV_TYPE` |

## 代码演示

<code src="@pages/useRequest" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |
