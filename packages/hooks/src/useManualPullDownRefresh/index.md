---
title: useManualPullDownRefresh
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 布局
  path: /layout
---

:::caution

区分官方的`usePullDownRefresh`, 官方为监听下拉刷新, 而本 hook 则为手动控制界面展示下拉刷新

:::

手动下拉刷新

## 何时使用

当需要手动设置下拉刷新状态时

## API

```ts
const [start, stop] = useManualPullDownRefresh();
```

## 参数说明

无

## 返回值说明

| 参数  | 类型                                                     | 说明                                                                                                                     |
| ----- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| start | `(duration?: number) => Promise<General.CallbackResult>` | 开始下拉刷新。调用后触发下拉刷新动画，效果与用户手动下拉刷新一致(若设置`duration`, 则会在设置时间结束后自动停止下拉刷新) |
| stop  | `() => Promise<General.CallbackResult>`                  | 停止当前页面下拉刷新                                                                                                     |

## 代码演示

<code src="useManualPullDownRefresh/index" group="layout" />

## Hook 支持度

| 微信小程序 | H5  |  ReactNative   |
| :--------: | :-: | :------------: |
|     ✔️     | ✔️  | ✔️(无动画效果) |
