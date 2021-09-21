---
title: useTabBar
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 布局
  path: /layout
---

# useTabBar

操作 Tab

## 何时使用

当需要对 Tab 做一些操作时

## API

```jsx | pure
const {
  setTabBarVisible,
  setRedDotVisible,
  setBadgeVisible,
  setTabBarItem,
  setTabBarStyle,
} = useTabBar();
```

## 参数说明

无

## 返回值说明

| 参数             | 类型                                                                                           | 说明                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| setTabBarVisible | `(visible: boolean, animation?: boolean) => Promise<General.CallbackResult>`                   | 显示/隐藏 tabBar                                                       |
| setRedDotVisible | `(visible: boolean, indexList: number[]) => Promise<General.CallbackResult>`                   | 显示/隐藏 tabBar 某几项的右上角的红点                                  |
| setBadgeVisible  | `(indexList: number[] &#124; ISetBadgeVisibleOptionItem[]) => Promise<General.CallbackResult>` | 为 tabBar 某几项的右上角添加/移除文本(移除时仅需要传递移除`index`即可) |
| setTabBarItem    | `(itemList: ISetTabBarItemOption[]) => Promise<General.CallbackResult>`                        | 动态设置 tabBar 某几项的内容                                           |
| setTabBarStyle   | `(option: ISetTabBarStyleOption) => Promise<General.CallbackResult>`                           | 动态设置 tabBar 的整体样式                                             |

### ISetBadgeVisibleOptionItem

| 参数  | 类型     | 说明                                  |
| ----- | -------- | ------------------------------------- |
| index | `number` | tabBar 的哪一项，从左边算起           |
| text  | `string` | 显示的文本，超过 4 个字符则显示成 ... |

### ISetTabBarItemOption

| 参数             | 类型     | 说明                                                                                               |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------- |
| index            | `number` | tabBar 的哪一项，从左边算起                                                                        |
| text             | `string` | tab 上的按钮文字                                                                                   |
| iconPath         | `string` | 图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px，当 postion 为 top 时，此参数无效          |
| selectedIconPath | `string` | 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px \* 81px ，当 postion 为 top 时，此参数无效 |

### ISetTabBarStyleOption

| 值              | 类型     | 说明                                     |
| --------------- | -------- | ---------------------------------------- |
| color           | `string` | tab 上的文字默认颜色，HexColor           |
| selectedColor   | `string` | tab 上的文字选中时的颜色，HexColor       |
| backgroundColor | `string` | tab 的背景色，HexColor                   |
| borderStyle     | `string` | tabBar 上边框的颜色， 仅支持 black/white |

## 代码演示

<code src="@pages/useTabBar" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

### 1. 更多说明

- [showTabBar](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBar.html)
- [hideTabBar](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBar.html)
- [showTabBarRedDot](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.showTabBarRedDot.html)
- [hideTabBarRedDot](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.hideTabBarRedDot.html)
- [setTabBarBadge](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarBadge.html)
- [removeTabBarBadge](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html)
- [setTabBarItem](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarItem.html)
- [setTabBarStyle](https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html)
