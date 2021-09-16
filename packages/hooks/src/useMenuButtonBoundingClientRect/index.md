---
title: useMenuButtonBoundingClientRect
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useMenuButtonBoundingClientRect

获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。

## 何时使用

需要获取菜单按钮布局信息判断

## API

```jsx | pure
const rect = useMenuButtonBoundingClientRect();
```

## 参数说明

无

## 返回值说明

| 返回值 | 说明         | 类型    |
| ------ | ------------ | ------- |
| rect   | 布局位置信息 | `TRect` |

### TRect

| 返回值 | 说明                 | 类型     |
| ------ | -------------------- | -------- |
| bottom | 下边界坐标，单位：px | `number` |
| height | 高度，单位：px       | `number` |
| left   | 左边界坐标，单位：px | `number` |
| right  | 右边界坐标，单位：px | `number` |
| top    | 上边界坐标，单位：px | `number` |
| width  | 宽度，单位：px       | `number` |

## 代码演示

<code src="@pages/useMenuButtonBoundingClientRect" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/ui/menu/wx.getMenuButtonBoundingClientRect.html)
