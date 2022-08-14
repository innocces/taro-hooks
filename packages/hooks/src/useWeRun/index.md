---
title: useWeRun
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useWeRun

获取微信运动数据

## 何时使用

当需要使用用户微信运动数据时

:::tip

获取用户微信数据时, 需要先调用 <code>wx.login</code> 接口。步数信息会在用户主动进入小程序时更新. 此外, 分享微信运动需在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。 只针对「体育-在线健身」类目的小程序开放。

:::

## API

```ts
const { get, share } = useWeRun();
```

## 参数说明

无

## 返回值说明

| 参数  | 类型                                                                  | 说明                           |
| ----- | --------------------------------------------------------------------- | ------------------------------ |
| get   | `PromiseWithoutOptionAction<Taro.getWeRunData.SuccessCallbackResult>` | 获取用户过去三十天微信运动步数 |
| share | `PromiseAction<Taro.shareToWeRun.record[]>`                           | 分享数据到微信运动             |

## 代码演示

<code src="useWeRun/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

### 1. 更多说明

- [getWeRunData](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html)
- [shareToWeRun](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.shareToWeRun.html)
