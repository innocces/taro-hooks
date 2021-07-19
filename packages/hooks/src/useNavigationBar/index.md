---
title: useNavigationBar
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 操作反馈
  path: /feedback
---

# useNavigationBar

操作导航条: Loading 动画、title 或 Color 以及 HomeButton

## 何时使用

当需要对导航栏客制化时

## API

```jsx | pure
const [loading, { toggleLoading, setTitle, setColor, hideHomeButton }] =
  useNavigationBar(initialOption);
```

## 参数说明

若设置初始参数, 会自动解析来执行对应的操作
| 参数 | 说明 | 类型 | 默认值 |
| ------------- | ------------------------------------------ | -------------------- | ------ |
| initialOption | 初始导航栏配置(若指定后面可与新的配置合并) | `{ loading?: boolean; fontColor?: string; animation?: boolean; backgroundColor?: string; title?: string; hideHomeButton?: boolean }` | - |

## 返回值说明

| 返回值         | 说明                        | 类型                                                                                                      |
| -------------- | --------------------------- | --------------------------------------------------------------------------------------------------------- |
| loading        | 当前导航栏 loading 动画状态 | `boolean`                                                                                                 |
| toggleLoading  | 设置导航栏 loading 动画状态 | `() => Promise<General.CallbackResult>`                                                                   |
| setTitle       | 设置导航栏标题              | `(string) => Promise<General.CallbackResult>`                                                             |
| setColor       | 设置导航条颜色              | `({fontColor: string; animation?: boolean; backgroundColor: string;}) => Promise<General.CallbackResult>` |
| hideHomeButton | 隐藏返回首页按钮            | `() => Promise<General.CallbackResult>`                                                                   |

## 代码演示

<code src="@pages/useNavigationBar" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
