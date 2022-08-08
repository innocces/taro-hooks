---
title: useBrightness
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useBrightness

屏幕亮度

## 何时使用

当需要获取或设置屏幕亮度

## API

```ts
const [brightness, setBrightness] = useBrightness(keepon?: boolean);
```

## 参数说明

| 参数   | 说明     | 类型      | 默认值 |
| ------ | -------- | --------- | ------ |
| keepon | 是否常亮 | `boolean` | -      |

## 返回值说明

| 返回值        | 说明                                   | 类型                                         |
| ------------- | -------------------------------------- | -------------------------------------------- |
| brightness    | 屏幕亮度值，范围 0 ~ 1，0 最暗，1 最亮 | `number`                                     |
| setBrightness | 设置屏幕亮度值(0~1)                    | `(value) => Promise<General.CallbackResult>` |

## 代码演示

<code src="useBrightness/index" group="device" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
