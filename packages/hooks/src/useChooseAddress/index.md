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

## API

```jsx | pure
const [chooseAddress] = useChooseAddress();
```

## 参数说明

无

## 返回值说明

| 参数          | 类型                                                          | 说明             |
| ------------- | ------------------------------------------------------------- | ---------------- |
| chooseAddress | `() => Promise<ISuccessResult &#124; General.CallbackResult>` | 获取用户收货地址 |

### ISuccessResult

| 参数         | 类型     | 说明                   |
| ------------ | -------- | ---------------------- |
| cityName     | `string` | 国标收货地址第二级地址 |
| countyName   | `string` | 国标收货地址第三级地址 |
| detailInfo   | `string` | 详细收货地址信息       |
| nationalCode | `string` | 收货地址国家码         |
| postalCode   | `string` | 邮编                   |
| provinceName | `string` | 国标收货地址第一级地址 |
| telNumber    | `string` | 收货人手机号码         |
| userName     | `string` | 收货人姓名             |

## 代码演示

<code src="@pages/useChooseAddress" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |

## FAQ

### 1. 更多说明

- [chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html)
- [openAddress](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html#60)
- 注意: `h5`端仅在公众号内可使用. 须在`jsApiList`中显式的将`openAddress`纳入.
