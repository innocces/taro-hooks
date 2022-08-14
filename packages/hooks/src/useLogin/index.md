---
title: useLogin
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useLogin

获取登录凭证, 检查登录状态

## 何时使用

当需要获取登录凭证, 检查登录状态

## API

```ts
const { check, login } = useLogin();
```

## 返回值说明

| 返回值 | 说明                                                                                                  | 类型                                                                                                     |
| ------ | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| login  | 获取登录凭证(若`needCheck`为`true`则自动检测当前登录状态来进行登录操作, `plugin`为`true`则为插件登录) | `(needCheck?: boolean, plugin?: boolean, timeout?: number) => Promise<Taro.login.SuccessCallbackResult>` |
| check  | 检查登录状态                                                                                          | `() => Promise<General.CallbackResult>`                                                                  |

## 代码演示

<code src="useWeRun/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
