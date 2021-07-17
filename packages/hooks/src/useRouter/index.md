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

路由相关, 扩充`Taro useRouter`

## 何时使用

当需要获取路由，或者进行路由操作时

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

| 返回值       | 说明                                       | 类型                                                         |
| ------------ | ------------------------------------------ | ------------------------------------------------------------ |
| routerInfo   | `当前页面路由信息`                         | `RouterInfo<Partial<Record<string, string>>>`                |
| switchTab    | `异步跳转tabBar页面`                       | `switchTab(url: string, options?: { [_string]: any }).then`  |
| reLaunch     | `异步关闭所有页面，打开到应用内的某个页面` | `reLaunch(url: string, options?: { [_string]: any }).then`   |
| redirectTo   | `异步关闭当前页面，跳转到应用内的某个页面` | `redirectTo(url: string, options?: { [_string]: any }).then` |
| navigateTo   | `异步保留当前页面，跳转到应用内的某个页面` | `navigateTo(url: string, options?: { [_string]: any }).then` |
| navigateBack | `异步关闭当前页面，返回上一页面或多级页面` | `navigateBack(delta?: number).then`                          |

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
