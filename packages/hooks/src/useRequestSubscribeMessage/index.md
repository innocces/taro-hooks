---
title: useRequestSubscribeMessage
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useRequestSubscribeMessage

请求订阅(设备)消息

## 何时使用

当需要请求订阅消息时

## API

```ts
const { subscribe, subscribeDevice } = useRequestSubscribeMessage();
```

## 参数说明

无

## 返回值说明

| 参数            | 类型                                                                                             | 说明             |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------- |
| subscribe       | `PromiseAction<string, SuccessCallbackResult>`                                                   | 请求订阅消息     |
| subscribeDevice | `PromiseAction<ExcludeOption<Taro.requestSubscribeDeviceMessage.Option>, SuccessCallbackResult>` | 订阅设备消息接口 |

## 代码演示

<code src="useRequestSubscribeMessage/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
