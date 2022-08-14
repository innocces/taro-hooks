---
title: useUserInfo
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useUserInfo

获取用户信息

## 何时使用

当需要获取用户信息展示时

:::tip

**getUserInfo**会默认在方法内检查授权. 若未授权会直接返回错误.  
**getUserProfile**获取到的数据不包含**openId**和**unionId**  
此外要注意获取用户信息接口经常会调整。所以内置逻辑不作为保证完全成功的依据

:::

## API

```ts
const [userInfo, { getUserInfo, getUserProfile }] = useUserInfo();
```

## 参数说明

无

## 返回值说明

| 参数           | 类型                                                                                                          | 说明                               |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| userInfo       | `UserInfo`                                                                                                    | 用户信息对象                       |
| getUserProfile | `PromiseOptionalAction<ExcludeOption<Taro.getUserProfile.Option>, Taro.getUserProfile.SuccessCallbackResult>` | 获取用户信息(点击生效, 且每次弹窗) |
| getUserInfo    | `PromiseOptionalAction<ExcludeOption<Taro.getUserInfo.Option>, Taro.getUserInfo.SuccessCallbackResult>`       | 获取用户信息                       |

## 代码演示

<code src="useUserInfo/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
