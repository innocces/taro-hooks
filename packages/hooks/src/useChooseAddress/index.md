---
title: useChooseAddress
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useChooseAddress

获取用户收货地址。调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。

## 何时使用

当需要使用用户地址时

:::tip

注意: `h5`端仅在公众号内可使用. 须在`jsApiList`中显式的将`openAddress`纳入.

:::

## API

```ts
const choose = useChooseAddress();
```

## 参数说明

无

## 返回值说明

| 参数          | 类型                                                                   | 说明             |
| ------------- | ---------------------------------------------------------------------- | ---------------- |
| chooseAddress | `PromiseWithoutOptionAction<Taro.chooseAddress.SuccessCallbackResult>` | 获取用户收货地址 |

## 代码演示

<code src="useChooseAddress/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |
