---
title: useRouter
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useRouter

路由相关, 扩充 `Taro useRouter` , 并融合跳转小程序 `api`

## 何时使用

当需要获取路由，或者进行路由以及小程序跳转操作时

## API

```jsx | pure
const [
  routerInfo,
  { switchTab, reLaunch, redirectTo, navigateTo, navigateBack },
] = useRouter();
```

## 参数说明

无

## 返回值说明

以下方法参数:

- `url: string`: 需要跳转的应用内路径
- `options: { [_string]: any }`: 跳转携带参数(可选)
  <br/>

| 返回值       | 说明                                                   | 类型                                                                                                                                |
| ------------ | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| routerInfo   | 当前页面路由信息                                       | `RouterInfo<Partial<Record<string, string>>>`                                                                                       |
| switchTab    | 异步跳转 tabBar 页面                                   | `(url: string, options?: TRecord) => Promise<General.CallbackResult>`                                                               |
| reLaunch     | 异步关闭所有页面，打开到应用内的某个页面               | `(url: string, options?: TRecord) => Promise<General.CallbackResult>`                                                               |
| redirectTo   | 异步关闭当前页面，跳转到应用内的某个页面               | `(url: string, options?: TRecord) => Promise<General.CallbackResult>`                                                               |
| navigateTo   | 异步保留当前页面，跳转到应用内的某个页面或跳转至小程序 | `(urlOrMark: string &#124; boolean, options?: TRecord &#124; INavigateToMiniProgramSyncOptions) => Promise<General.CallbackResult>` |
| navigateBack | 异步关闭当前页面，返回上一页面或多级页面或返回小程序   | `(deltaOrMark?: number &#124; boolean, extraData?: TRecord) => Promise<General.CallbackResult>`                                     |

### INavigateToMiniProgramSyncOptions

| 参数       | 类型                                     | 说明                                                                                                                                                                                                                                                                                      |
| ---------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appId      | `string`                                 | 要打开的小程序 appId                                                                                                                                                                                                                                                                      |
| path       | `string`                                 | 打开的页面路径，如果为空则打开首页。path 中 ? 后面的部分会成为 query，在小程序的 App.onLaunch、App.onShow 和 Page.onLoad 的回调函数或小游戏的 wx.onShow 回调函数、wx.getLaunchOptionsSync 中可以获取到 query 数据。对于小游戏，可以只传入 query 部分，来实现传参效果，如：传入 "?foo=bar" |
| envVersion | `keyof navigateToMiniProgram.envVersion` | 要打开的小程序版本。仅在当前小程序为开发版或体验版时此参数有效。如果当前小程序是正式版，则打开的小程序必定是正式版                                                                                                                                                                        |
| extraData  | `TRecord`                                | 需要传递给目标小程序的数据，目标小程序可在 App.onLaunch，App.onShow. [useLaunchOptions](/hooks/useLaunchOptions) 中获取到这份数据                                                                                                                                                         |

### envVersion

| 参数    | 说明   |
| ------- | ------ |
| develop | 开发版 |
| trial   | 体验版 |
| release | 正式版 |

## 代码演示

<code src="@pages/useRouter" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html)  
见[Taro 文档](https://taro-docs.jd.com/taro/docs/hooks#userouter)
