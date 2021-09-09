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

```jsx | pure
const [
  { authSetting, subscriptionsSetting, miniprogramAuthSetting },
  { openSetting, authorize },
] = useAuthorize(option?);
```

## 参数说明

| 参数              | 说明                                                                                                                       | 类型      | 默认值  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| withSubscriptions | 是否同时获取用户订阅消息的订阅状态，默认不获取(注意: 该 hook 默认实时获取最新授权信息, 初始配置决定整个周期中获取配置行为) | `boolean` | `false` |

## 返回值说明

| 返回值                 | 说明                                         | 类型                                                                                                                           |
| ---------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| authSetting            | 用户授权结果                                 | `AuthSetting`                                                                                                                  |
| subscriptionsSetting   | 用户订阅消息设置                             | `ISubscriptionsSetting`                                                                                                        |
| miniprogramAuthSetting | 在插件中调用时，当前宿主小程序的用户授权结果 | `AuthSetting`                                                                                                                  |
| openSetting            | 调起客户端小程序设置界面                     | `(withSubscriptions?: boolean) => Promise<IROpenSettingSuccessCallbackResult>`                                                 |
| authorize              | 提前向用户发起授权请求                       | `(scope: keyof AuthSetting &#124; keyof IAuthSettingForMiniProgram, miniprogram?: boolean) => Promise<General.CallbackResult>` |

### ISubscriptionsSetting

| 参数        | 类型                                                    | 说明                                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mainSwitch  | `boolean`                                               | 订阅消息总开关                                                                                                                                                                                                        |
| itemSetting | `{[_: string]: 'accept' &#124; 'reject' &#124; 'ban';}` | 每一项订阅消息的订阅状态,对象的键为一次性订阅消息的模板 id 或系统订阅消息的类型，值为'accept'、'reject'、'ban'中的其中一种。'accept'表示用户同意订阅这条消息，'reject'表示用户拒绝订阅这条消息，'ban'表示已被后台封禁 |

### IAuthSettingForMiniProgram

| 参数                   | 类型      | 说明       |
| ---------------------- | --------- | ---------- |
| scope.record           | `boolean` | 录音       |
| scope.writePhotosAlbum | `boolean` | 保存到相册 |
| scope.camera           | `boolean` | 摄像头     |

### AuthSetting

| 参数                         | 类型      | 说明                                         |
| ---------------------------- | --------- | -------------------------------------------- |
| scope.userInfo               | `boolean` | 用户信息                                     |
| scope.userLocation           | `boolean` | 地理位置                                     |
| scope.userLocationBackground | `boolean` | 后台定位                                     |
| scope.address                | `boolean` | 通讯地址（已取消授权，可以直接调用对应接口） |
| scope.invoiceTitle           | `boolean` | 发票抬头（已取消授权，可以直接调用对应接口） |
| scope.invoice                | `boolean` | 获取发票（已取消授权，可以直接调用对应接口） |
| scope.werun                  | `boolean` | 微信运动步数                                 |
| scope.record                 | `boolean` | 录音功能                                     |
| scope.writePhotosAlbum       | `boolean` | 保存到相册                                   |
| scope.camera                 | `boolean` | 摄像头                                       |

## 代码演示

<code src="@pages/useAuthorize" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

### 1. 更多说明

- [authorize](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.htmll)
- [openSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)
- [getSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)
- [scope](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html#scope-%E5%88%97%E8%A1%A8)
