---
title: useKeyboard
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 设备
  path: /device
---

# useKeyboard

获取键盘高度和操作键盘，或获取选取

## 何时使用

需要操作键盘相关内容

## API

```ts
const { height, close, getRange } = useKeyboard();
```

## 参数说明

无

## 返回值说明

| 参数     | 类型                                                     | 说明               |
| -------- | -------------------------------------------------------- | ------------------ |
| height   | `number`                                                 | 键盘高度           |
| close    | `PromiseWithoutOptionAction<TaroGeneral.CallbackResult>` | 关闭键盘           |
| getRange | `PromiseWithoutOptionAction<TaroGeneral.CallbackResult>` | 获取选择文本的范围 |

## 代码演示

<code src="useKeyboard/index" group="device" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
