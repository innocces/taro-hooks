---
title: useBattery
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useBattery

电量情况(补齐 H5 电量 api, 注意 Safari 不支持)

## 何时使用

当需要获取当前设备电量情况时

## API

```jsx | pure
const batteryInfo = useBattery();
```

## 参数说明

无

## 返回值说明

| 返回值      | 说明 | 类型                                   |
| ----------- | ---- | -------------------------------------- |
| batteryInfo | 电量 | `{isCharging: boolean;level: number;}` |

## 代码演示

<code src="@pages/useBattery" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |
