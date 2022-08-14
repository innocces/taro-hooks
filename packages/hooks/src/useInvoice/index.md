---
title: useInvoice
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useInvoice

获取发票、选择发票抬头。

## 何时使用

当需要使用发票或抬头信息时

:::tip

选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了微信认证的，才能调用

:::

## API

```ts
const { choose, chooseTitle } = useInvoice();
```

## 参数说明

无

## 返回值说明

| 参数        | 类型                                                                        | 说明         |
| ----------- | --------------------------------------------------------------------------- | ------------ |
| choose      | `PromiseWithoutOptionAction<Taro.chooseInvoice.SuccessCallbackResult>`      | 获取发票信息 |
| chooseTitle | `PromiseWithoutOptionAction<Taro.chooseInvoiceTitle.SuccessCallbackResult>` | 获取发票抬头 |

## 代码演示

<code src="useInvoice/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
