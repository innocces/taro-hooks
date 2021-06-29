---
title: useBase64ToArrayBuffer
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useBase64ToArrayBuffer

将 Base64 字符串转成 ArrayBuffer 数据

## 何时使用

需要将 Base64 和 ArrayBuffer 转换时

## API

```jsx | pure
const [buffer, setBase64] = useBase64ToArrayBuffer(base64);
```

## 参数说明

| 参数   | 说明                                            | 类型     | 默认值 |
| ------ | ----------------------------------------------- | -------- | ------ |
| base64 | 必填，要转化成 ArrayBuffer 对象的 Base64 字符串 | `string` | -      |

## 返回值说明

| 返回值    | 说明                  | 类型                       |
| --------- | --------------------- | -------------------------- |
| buffer    | 转换的 ArrayBuffer    | `ArrayBuffer`              |
| setBase64 | 更改当前转换的 base64 | `(base64: string) => void` |

## 代码演示

<code src="@pages/useBase64ToArrayBuffer" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html)
