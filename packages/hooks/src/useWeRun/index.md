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

<Alert>
  获取用户微信数据时, 需要先调用 <code>wx.login</code> 接口。步数信息会在用户主动进入小程序时更新. 此外, 分享微信运动需在小程序管理后台，「开发」-「接口设置」中自助开通该组件权限。 只针对「体育-在线健身」类目的小程序开放。
</Alert>

## API

```jsx | pure
const [getWeRunData, shareToWeRun] = useWeRun();
```

## 参数说明

无

## 返回值说明

| 参数         | 类型                                                                      | 说明                           |
| ------------ | ------------------------------------------------------------------------- | ------------------------------ |
| getWeRunData | `() => Promise<IGetWeRunDataSuccessResult &#124; General.CallbackResult>` | 获取用户过去三十天微信运动步数 |
| shareToWeRun | `(recordList: IRecordListItem[]) => Promise<General.CallbackResult>`      | 分享数据到微信运动             |

### IGetWeRunDataSuccessResult

| 参数          | 类型     | 说明                                                                          |
| ------------- | -------- | ----------------------------------------------------------------------------- |
| encryptedData | `string` | 包括敏感数据在内的完整用户信息的加密数据, 解密后得到的数据结构见后文          |
| iv            | `string` | 加密算法的初始向量                                                            |
| cloudId       | `string` | 敏感数据对应的云 ID，开通云开发的小程序才会返回，可通过云调用直接获取开放数据 |

### IRecordListItem

| 参数     | 类型     | 说明                                  |
| -------- | -------- | ------------------------------------- |
| typeId   | `number` | 运动项目 id                           |
| time     | `number` | 运动时长(单位: 分钟, 范围: 1-1440)    |
| distance | `number` | 运动距离(单位: 米, 范围: 1-100000)    |
| number   | `number` | 运动个数(单位: 个, 范围: 1-10000)     |
| calorie  | `number` | 消耗卡路里(单位: 千焦, 范围: 1-10000) |

### typeId

| 运动类型   | typeId | 支持传入单位          |
| ---------- | ------ | --------------------- |
| 锻炼       | `1001` | time/calorie          |
| 体能训练   | `1002` | time/calorie          |
| 功能性训练 | `1003` | time/calorie          |
| 瑜伽       | `2001` | time/calorie          |
| 钓鱼       | `2002` | time/calorie          |
| 广场舞     | `2003` | time/calorie          |
| 踢足球     | `2004` | time/calorie          |
| 打篮球     | `2005` | time/calorie          |
| 打羽毛球   | `2006` | time/calorie          |
| 打乒乓球   | `2007` | time/calorie          |
| 打网球     | `2008` | time/calorie          |
| 跑步       | `3001` | time/distance/calorie |
| 登山       | `3002` | time/distance/calorie |
| 骑车       | `3003` | time/distance/calorie |
| 游泳       | `3004` | time/distance/calorie |
| 滑雪       | `3005` | time/distance/calorie |
| 跳绳       | `4001` | number/calorie        |
| 俯卧撑     | `4002` | number/calorie        |
| 深蹲       | `4003` | number/calorie        |

## 代码演示

<code src="@pages/useWeRun" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

### 1. 更多说明

- [getWeRunData](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html)
- [shareToWeRun](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.shareToWeRun.html)
