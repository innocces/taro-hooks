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

```ts
const [clipboardData, { set, get }] = useClipboardData();
```

## 参数说明

无

## 返回值说明

| 返回值        | 说明                 | 类型                                            |
| ------------- | -------------------- | ----------------------------------------------- |
| clipboardData | `当前剪切板内容`     | `any`                                           |
| set           | `设置当前剪切板内容` | `PromiseAction<any>`                            |
| get           | `获取当前剪切板内容` | `PromiseWithoutOptionAction<GetResult['data']>` |

## 代码演示

<code src="useClipboardData/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

1. 存储和返回有什么条件么?

   除**function/null/undefined**. 基础类型均可在获取的时候被反序列化回来.  
   除**string**所有的类型都会被序列化或者**JSON**之后再被存储
