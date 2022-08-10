---
title: useBackground
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 布局
  path: /layout
---

# useBackground

动态设置窗口

## 何时使用

当需要对窗口背景色和字体设置时

## API

```ts
const [setBackgroundColor, setBackgroundTextColor] = useBackground(option?);
```

## 参数说明

| 参数                  | 说明                                                | 类型         | 默认值 |
| --------------------- | --------------------------------------------------- | ------------ | ------ |
| backgroundColor       | 窗口的背景色，必须为十六进制颜色值                  | `string`     | -      |
| backgroundColorTop    | 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 | `string`     | -      |
| backgroundColorBottom | 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 | `string`     | -      |
| textStyle             | 下拉背景字体、loading 图的样式                      | `TTextStyle` | -      |

### TextStyle

| 参数  | 类型    | 说明       |
| ----- | ------- | ---------- |
| dark  | `dark`  | dark 样式  |
| light | `light` | light 样式 |

## 返回值说明

| 参数                   | 类型                                                                     | 说明                                                 |
| ---------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------- |
| setBackgroundColor     | `(setOption?: BackgroundColorOption) => Promise<General.CallbackResult>` | 动态设置下拉背景字体、loading 图的样式 ( `RN仅iOS` ) |
| setBackgroundTextColor | `(textStyle: TextStyle) => Promise<General.CallbackResult>`              | 动态设置窗口的背景色( `RN仅Android` )                |

### BackgroundColorOption

| 参数                  | 说明                                                | 类型     | 默认值 |
| --------------------- | --------------------------------------------------- | -------- | ------ |
| backgroundColor       | 窗口的背景色，必须为十六进制颜色值                  | `string` | -      |
| backgroundColorTop    | 顶部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 | `string` | -      |
| backgroundColorBottom | 底部窗口的背景色，必须为十六进制颜色值，仅 iOS 支持 | `string` | -      |

## 代码演示

<code src="useManualPullDownRefresh/index" group="layout" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
