---
title: useArrayBuffer
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useArrayBuffer

将 ArrayBuffer 对象 和 Base64 字符串 相互转换

## 何时使用

需要将 ArrayBuffer 和 Base64 相互转换时

## API

```ts
const { toBase64, toArrayBuffer } = useArrayBuffer();
```

## 参数说明

无

## 返回值说明

| 返回值        | 说明                  | 类型                                   |
| ------------- | --------------------- | -------------------------------------- |
| toBase64      | arrayBuffer to Base64 | `(arrayBuffer: ArrayBuffer) => string` |
| toArrayBuffer | base64 to arrayBuffer | `(base64: string) => ArrayBuffer`      |

## 代码演示

<code src="useArrayBuffer/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
