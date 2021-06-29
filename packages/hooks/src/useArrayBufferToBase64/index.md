---
title: useArrayBufferToBase64
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useArrayBufferToBase64

将 ArrayBuffer 对象转成 Base64 字符串

## 何时使用

需要将 ArrayBuffer 和 Base64 转换时

## API

```jsx | pure
const [base64, setArrayBuffer] = useArrayBufferToBase64(ArrayBuffer);
```

## 参数说明

| 参数        | 说明              | 类型          | 默认值 |
| ----------- | ----------------- | ------------- | ------ |
| arrayBuffer | 必填，arrayBuffer | `ArrayBuffer` | -      |

## 返回值说明

| 返回值         | 说明                       | 类型                                 |
| -------------- | -------------------------- | ------------------------------------ |
| base64         | 转换的 base64              | `string`                             |
| setArrayBuffer | 更改当前转换的 ArrayBuffer | `(arrayBuffer: ArrayBuffer) => void` |

## 代码演示

<code src="@pages/useArrayBufferToBase64" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.arrayBufferToBase64.html)
