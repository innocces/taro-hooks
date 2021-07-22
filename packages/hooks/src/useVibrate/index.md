---
title: useVibrate
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useVibrate

提供震动反馈

## 何时使用

当需要操作或者使用震动时

## API

```jsx | pure
const [vibrateAction, stopVibrateAction] = useVibrate(interval?: boolean, gap?: number);
```

## 参数说明

| 参数     | 说明         | 类型      | 默认值 |
| -------- | ------------ | --------- | ------ |
| interval | 是否持续震动 | `boolean` | -      |
| gap      | 持续震动间隔 | `number`  | 200    |

## 返回值说明

| 返回值            | 说明                             | 类型                                                  |
| ----------------- | -------------------------------- | ----------------------------------------------------- |
| vibrateAction     | 操作函数, 可根据参数执行长短震动 | `(long?: boolean) => Promise<General.CallbackResult>` |
| stopVibrateAction | 若为持续震动可取消震动           | `(long?: boolean) => Promise<General.CallbackResult>` |

## 代码演示

<code src="@pages/useVibrate" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
