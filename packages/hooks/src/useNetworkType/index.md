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

:::caution

由于获取网络信息为异步, 故初始值为**unknown**. 该 hook 会自动监听当前环境 networkType

:::

# useNetworkType

获取网络类型

## 何时使用

当需要根据当前网络类型做判断时

## API

```ts
const networkType: keyof NetworkType = useNetworkType(autoListen?: boolean);
```

## 参数说明

| 参数       | 说明             | 类型      | 默认值 |
| ---------- | ---------------- | --------- | ------ |
| autoListen | 是否自动开始监听 | `boolean` | `true` |

## 返回值说明

| 返回值      | 说明         | 类型                |
| ----------- | ------------ | ------------------- |
| networkType | 当前网络类型 | `keyof NetworkType` |

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

<code src="useNetworkType/index" group="network" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
