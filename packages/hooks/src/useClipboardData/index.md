---
title: useClipboardData
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useClipboardData

剪贴板操作

## 何时使用

需要复制和获取复制文本时

## API

```jsx | pure
const [clipboardData, { set, get }] = useClipboardData();
```

## 参数说明

无

## 返回值说明

| 返回值        | 说明                 | 类型                          |
| ------------- | -------------------- | ----------------------------- |
| clipboardData | `当前剪切板内容`     | `any`                         |
| set           | `设置当前剪切板内容` | `(text: any) => Promise<any>` |
| get           | `获取当前剪切板内容` | `() => Promise<any>`          |

## 代码演示

<code src="@pages/useClipboardData" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/device/clipboard/wx.getClipboardData.html)
