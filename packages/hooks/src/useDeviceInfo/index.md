---
title: useDeviceInfo
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

:::caution

更推荐大家使用[useSystemInfo](/hooks/useSystemInfo/). 除**abi**外所有的信息均可获取到

:::

获取设备基础信息

## 何时使用

当需要获取设备基础信息做一些判断时

## API

```tsx
const deviceInfo = useDeviceInfo();
```

## 参数说明

无

## 返回值说明

### deviceInfo

| 参数             | 类型      | 说明                                                                                                                                                   |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| abi              | `string`  | 应用二进制接口类型（仅 Android 支持）                                                                                                                  |
| benchmarkLevel   | `number`  | 设备性能等级（仅 Android 小游戏）。取值为：-2 或 0（该设备无法运行小游戏），-1（性能未知），>=1（设备性能值，该值越高，设备性能越好，目前最高不到 50） |
| bluetoothEnabled | `boolean` | 蓝牙的系统开关                                                                                                                                         |
| brand            | `string`  | 设备品牌                                                                                                                                               |
| model            | `string`  | 设备型号                                                                                                                                               |
| platform         | `string`  | 客户端平台                                                                                                                                             |
| system           | `string`  | 操作系统及版本                                                                                                                                         |

## 代码演示

<code src="useDeviceInfo/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
