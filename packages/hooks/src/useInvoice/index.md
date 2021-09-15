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

<Alert>选择用户的发票抬头。当前小程序必须关联一个公众号，且这个公众号是完成了微信认证的，才能调用</Alert>

## API

```jsx | pure
const [chooseInvoice, chooseInvoiceTitle] = useInvoice();
```

## 参数说明

无

## 返回值说明

| 参数               | 类型                                                                            | 说明         |
| ------------------ | ------------------------------------------------------------------------------- | ------------ |
| chooseInvoice      | `() => Promise<IChooseInvoiceSuccessResult[] &#124; General.CallbackResult>`    | 获取发票信息 |
| chooseInvoiceTitle | `() => Promise<IChooseInvoiceTitleSuccessResult &#124; General.CallbackResult>` | 获取发票抬头 |

### IChooseInvoiceSuccessResult

| 参数         | 类型     | 说明                                                                              |
| ------------ | -------- | --------------------------------------------------------------------------------- |
| card_id      | `string` | 所选发票卡券的 `cardId`                                                           |
| encrypt_code | `string` | 所选发票卡券的加密`code`，报销方可以通过`cardId`和`encryptCode`获得报销发票的信息 |
| app_id       | `string` | 发票方的`appId`                                                                   |

### IChooseInvoiceTitleSuccessResult

| 参数           | 类型         | 说明                            |
| -------------- | ------------ | ------------------------------- |
| bankAccount    | `string`     | 银行账号                        |
| bankName       | `string`     | 银行名称                        |
| companyAddress | `string`     | 单位地址                        |
| taxNumber      | `string`     | 抬头税号                        |
| telephone      | `string`     | 手机号码                        |
| title          | `string`     | 抬头名称                        |
| type           | `0 &#124; 1` | 0"单位" &#124; 1“个人” 抬头类型 |

## 代码演示

<code src="@pages/useInvoice" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

### 1. 更多说明

- [chooseInvoice](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html)
- [chooseInvoiceTitle](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html)
