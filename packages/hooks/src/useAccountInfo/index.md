---
title: useAccountInfo
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  xxxx: wechat
  title: 小程序
  path: /wechat
---

# useAccountInfo

获取账号信息

## 何时使用

当需要获取账号信息时

## API

```jsx | pure
const accountInfo = useAccountInfo();
```

## 参数说明

无

## 返回值说明

| 参数        | 类型          | 说明                                       |
| ----------- | ------------- | ------------------------------------------ |
| miniProgram | `MiniProgram` | 小程序账号信息                             |
| plugin      | `Plugin`      | 插件帐号信息（仅在插件中调用时包含这一项） |

### MiniProgram

| 参数       | 类型         | 说明             |
| ---------- | ------------ | ---------------- |
| appId      | `string`     | 小程序 appId     |
| envVersion | `EnvVersion` | 小程序版本       |
| version    | `string`     | 线上小程序版本号 |

### Plugin

| 参数    | 类型     | 说明       |
| ------- | -------- | ---------- |
| appId   | `string` | 插件 appId |
| version | `string` | 插件版本号 |

### EnvVersion

| 值      | 类型     | 说明   |
| ------- | -------- | ------ |
| develop | `string` | 开发版 |
| trial   | `string` | 体验版 |
| release | `string` | 正式版 |

## 代码演示

<code src="useAccountInfo/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
