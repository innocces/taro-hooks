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

## API

```jsx | pure
const [userInfo, { getUserInfo, getUserProfile }] = useUserInfo();
```

## 参数说明

无

## 返回值说明

| 参数           | 类型                                                                           | 说明                               |
| -------------- | ------------------------------------------------------------------------------ | ---------------------------------- |
| userInfo       | `UserInfo`                                                                     | 用户信息对象                       |
| getUserProfile | `(option?: IOption) => Promise<IUserInfo &#124; General.CallbackResult>`       | 获取用户信息(点击生效, 且每次弹窗) |
| getUserInfo    | `(option: IProfileOption) => Promise<IUserInfo &#124; General.CallbackResult>` | 获取用户信息                       |

### IOption

| 参数            | 类型       | 说明                                                                                                                                                                                                                                            |
| --------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lang            | `Language` | 显示用户信息的语言                                                                                                                                                                                                                              |
| withCredentials | `boolean`  | 是否带上登录态信息。当 withCredentials 为 true 时，要求此前有调用过 wx.login 且登录态尚未过期，此时返回的数据会包含 encryptedData, iv 等敏感信息；当 withCredentials 为 false 时，不要求有登录态，返回的数据不包含 encryptedData, iv 等敏感信息 |

### IProfileOption

| 参数 | 类型       | 说明                                           |
| ---- | ---------- | ---------------------------------------------- |
| lang | `Language` | 显示用户信息的语言                             |
| desc | `string`   | 声明获取用户个人信息后的用途，不超过 30 个字符 |

### UserInfo

| 参数          | 类型                  | 说明                                                                                                                                                                                                                                         |
| ------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| avatarUrl     | `string`              | 用户头像图片的 URL。URL 最后一个数值代表正方形头像大小（有 0、46、64、96、132 数值可选，0 代表 640x640 的正方形头像，46 表示 46x46 的正方形头像，剩余数值以此类推。默认 132），用户没有头像时该项为空。若用户更换头像，原有头像 URL 将失效。 |
| city          | `string`              | 用户所在城市                                                                                                                                                                                                                                 |
| country       | `string`              | 用户所在国家                                                                                                                                                                                                                                 |
| gender        | `0 &#124; 1 &#124; 2` | 用户性别                                                                                                                                                                                                                                     |
| language      | `string`              | 显示 country，province，city 所用的语言                                                                                                                                                                                                      |
| nickName      | `string`              | 用户昵称                                                                                                                                                                                                                                     |
| province      | `string`              | 用户所在省份                                                                                                                                                                                                                                 |
| rawData       | `string`              | 不包括敏感信息的原始数据字符串，用于计算签名                                                                                                                                                                                                 |
| signature     | `string`              | 使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息                                                                                                                                                                               |
| encryptedData | `string`              | 包括敏感数据在内的完整用户信息的加密数据                                                                                                                                                                                                     |
| iv            | `string`              | 加密算法的初始向量                                                                                                                                                                                                                           |
| cloudID       | `string`              | 敏感数据对应的云 ID                                                                                                                                                                                                                          |

### Gender

| 参数 | 类型 |
| ---- | ---- |
| 0    | 未知 |
| 1    | 男性 |
| 2    | 女性 |

### Language

| 参数  | 类型     |
| ----- | -------- |
| en    | 英文     |
| zh_CN | 简体中文 |
| zh_TW | 繁体中文 |

## 代码演示

<code src="@pages/useUserInfo" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

### 1. 更多说明

- [getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)
- [getUserProfile](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserProfile.html)
- [调整说明](https://developers.weixin.qq.com/community/develop/doc/000cacfa20ce88df04cb468bc52801)
