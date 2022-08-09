---
title: useScanCode
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useScanCode

扫码

## 何时使用

当需要针对维码进行解析时

## API

```ts
const { scan, cameraScan } = useScanCode(initialOption?: Option);
```

## 参数说明

| 参数           | 说明                                     | 类型       | 默认值 |
| -------------- | ---------------------------------------- | ---------- | ------ |
| onlyFromCamera | 是否只能从相机扫码，不允许从相册选择图片 | `boolean`  | -      |
| scanType       | 扫码类型                                 | `ScanType` | -      |

## 返回值说明

| 返回值     | 说明     | 类型                                                                              |
| ---------- | -------- | --------------------------------------------------------------------------------- |
| scan       | 扫码     | `(options?: Options) => Promise<scanCode.SuccessCallbackResult>`                  |
| cameraScan | 相机扫码 | `(scanType?: keyof scanCode.ScanType) => Promise<scanCode.SuccessCallbackResult>` |

## 代码演示

<code src="useScanCode/index" group="device" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
