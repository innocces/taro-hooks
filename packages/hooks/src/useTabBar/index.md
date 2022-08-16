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

```ts
const { toggleRedDot, toggleBadge, setStyle, setItem, toggle } = useTabBar();
```

## 参数说明

无

## 返回值说明

| 参数         | 类型                                                                                                                   | 说明                                                                 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| toggle       | `(animation?: boolean) => Promise<General.CallbackResult>`                                                             | 显示/隐藏 tabBar                                                     |
| toggleRedDot | `(index?: number) => Promise<General.CallbackResult>`                                                                  | 显示/隐藏 tabBar 某项的右上角的红点                                  |
| toggleBadge  | `(index?: number, text?: string) => Promise<General.CallbackResult>`                                                   | 为 tabBar 某项的右上角添加/移除文本(移除时仅需要传递移除`index`即可) |
| setItem      | `(option: Omit<ExcludeOption<Taro.setTabBarItem.Option>, 'index'>, index?: number) => Promise<General.CallbackResult>` | 动态设置 tabBar 某项的内容(若不传`index`则会统一给所有的添加样式)    |
| setStyle     | `(option: ExcludeOption<Taro.setTabBarStyle.Option>) => Promise<General.CallbackResult>`                               | 动态设置 tabBar 的整体样式                                           |

## 代码演示

<code src="useTabBar/index" group="layout" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
