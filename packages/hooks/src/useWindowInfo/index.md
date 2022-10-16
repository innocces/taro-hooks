---
title: useWindowInfo
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

:::caution

更推荐大家使用[useSystemInfo](/hooks/useSystemInfo/). 所有的信息均可获取到

:::

获取窗口信息

## 何时使用

当需要获取窗口信息做一些判断时

## API

```tsx
const windowInfo = useWindowInfo();
```

## 参数说明

无

## 返回值说明

### windowInfo

| 参数            | 类型                         | 说明                     |
| --------------- | ---------------------------- | ------------------------ |
| pixelRatio      | `number`                     | 设备像素比               |
| screenWidth     | `number`                     | 屏幕宽度，单位 px        |
| screenHeight    | `number`                     | 屏幕高度，单位 px        |
| windowWidth     | `number`                     | 可使用窗口宽度，单位 px  |
| windowHeight    | `number`                     | 可使用窗口高度，单位 px  |
| statusBarHeight | `number`                     | 状态栏的高度，单位 px    |
| safeArea        | `TaroGeneral.SafeAreaResult` | 在竖屏正方向下的安全区域 |

## 代码演示

<code src="useWindowInfo/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
