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

```jsx | pure
const [vibrateAction, stopVibrateAction] = useVibrate(interval?: boolean, gap?: number);
```

## 参数说明

| 参数           | 说明                                     | 类型       | 默认值 |
| -------------- | ---------------------------------------- | ---------- | ------ |
| onlyFromCamera | 是否只能从相机扫码，不允许从相册选择图片 | `boolean`  | -      |
| scanType       | 扫码类型                                 | `ScanType` | -      |

### ScanType

| 类型           | 值         |
| -------------- | ---------- |
| 一维码         | barCode    |
| 二维码         | qrCode     |
| Data Matrix 码 | datamatrix |
| PDF417 条码    | pdf417     |

### QRType

| 类型   | 值                |
| ------ | ----------------- |
| 一维码 | AZTEC             |
| 一维码 | CODABAR           |
| 一维码 | CODE_39           |
| 一维码 | CODE_93           |
| 一维码 | CODE_128          |
| 一维码 | CODE_25           |
| 一维码 | EAN_8             |
| 一维码 | EAN_13            |
| 一维码 | ITF               |
| 一维码 | MAXICODE          |
| 一维码 | RSS_14            |
| 一维码 | RSS_EXPANDED      |
| 一维码 | UPC_A             |
| 一维码 | UPC_E             |
| 一维码 | UPC_EAN_EXTENSION |
| 二维码 | QR_CODE           |
| 二维码 | DATA_MATRIX       |
| 二维码 | PDF_417           |
| 二维码 | WX_CODE           |

## 返回值说明

| 返回值     | 说明     | 类型                                                                              |
| ---------- | -------- | --------------------------------------------------------------------------------- |
| scan       | 扫码     | `(options?: IOptions) => Promise<scanCode.SuccessCallbackResult>`                 |
| cameraScan | 相机扫码 | `(scanType?: keyof scanCode.ScanType) => Promise<scanCode.SuccessCallbackResult>` |

## 代码演示

<code src="@pages/useScanCode" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
