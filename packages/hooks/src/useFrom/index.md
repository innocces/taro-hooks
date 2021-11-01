---
title: useFrom
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useFrom

路由相关, 扩充 `Taro useRouter` , 获取来源页面信息

## 何时使用

当需要获取来源页面信息时

## API

```jsx | pure
const from = useFrom();
```

## 参数说明

无

## 返回值说明

| 返回值 | 说明             | 类型                                          |
| ------ | ---------------- | --------------------------------------------- |
| from   | 来源页面路由信息 | `RouterInfo<Partial<Record<string, string>>>` |

## 代码演示

<code src="@pages/useFrom" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html)  
见[Taro 文档](https://taro-docs.jd.com/taro/docs/hooks#userouter)
