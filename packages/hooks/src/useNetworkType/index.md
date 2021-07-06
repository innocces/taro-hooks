---
title: useNetworkType
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 网络
  path: /network
---

<Alert>由于获取网络信息为异步, 故初始值为<code>undefined</code>。若业务中可做初始判空处理。 此外改 hook 会自动监听当前环境 networkType</Alert>

# useNetworkType

获取网络类型

## 何时使用

当需要根据当前网络类型做判断时

## API

```jsx | pure
const networkType: NetworkType = useNetworkType();
```

## 返回值说明

| 返回值      | 说明         | 类型          |
| ----------- | ------------ | ------------- |
| networkType | 当前网络类型 | `NetworkType` |

### NetworkType

| 类型    | 值      |
| ------- | ------- |
| wifi    | wifi    |
| 2g      | 2g      |
| 3g      | 3g      |
| 4g      | 4g      |
| 5g      | 5g      |
| unknown | unknown |
| none    | none    |

## 代码演示

<code src="@pages/useNetworkType" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
