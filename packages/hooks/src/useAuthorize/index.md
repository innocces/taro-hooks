---
title: useAuthorize
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useAuthorize

直接调起用户授权信息、获取用户授权信息

## 何时使用

当需要在使用某些权限功能前进行授权或校验时

## API

```ts
const {
    authSetting,
    subscriptionsSetting,
    authorize,
    get,
    open
} = useAuthorize(option?);
```

## 参数说明

| 参数              | 说明                                           | 类型      | 默认值  |
| ----------------- | ---------------------------------------------- | --------- | ------- |
| withSubscriptions | 是否同时获取用户订阅消息的订阅状态，默认不获取 | `boolean` | `false` |

## 返回值说明

| 返回值               | 说明                     | 类型                                                                         |
| -------------------- | ------------------------ | ---------------------------------------------------------------------------- |
| authSetting          | 用户授权结果             | `AuthSetting & { mini: AuthSetting }`                                        |
| subscriptionsSetting | 用户订阅消息设置         | `SubscriptionsSetting`                                                       |
| open                 | 调起客户端小程序设置界面 | `(withSubscriptions?: boolean) => Promise<OpenSettingSuccessCallbackResult>` |
| get                  | 获取用户授权信息         | `(withSubscriptions?: boolean) => Promise<GetSettingSuccessCallbackResult>`  |
| authorize            | 提前向用户发起授权请求   | `(scope: string, mini?: boolean) => Promise<General.CallbackResult>`         |

## 代码演示

<code src="useAuthorize/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
