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

请求订阅消息

## 何时使用

当需要请求订阅消息时

## API

```jsx | pure
const [requestSubscribeMessage] = useRequestSubscribeMessage();
```

## 参数说明

无

## 返回值说明

| 参数                    | 类型                                                                                                                        | 说明         |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------ |
| requestSubscribeMessage | `(tmplIds: (keyof TSuccessResult)[]) => Promise<TSuccessResult &#124; requestSubscribeMessageNamespace.FailCallbackResult>` | 请求订阅消息 |

### TSuccessResult

```typescript | pure
export type TSuccessResult = {
  [tmplId: string]: TAuthResultType;
};
```

### TAuthResultType

| 参数   | 说明                                   |
| ------ | -------------------------------------- |
| accept | 表示用户同意订阅该条 id 对应的模板消息 |
| reject | 表示用户拒绝订阅该条 id 对应的模板消息 |
| ban    | 表示已被后台封禁                       |

## 代码演示

<code src="@pages/useRequestSubscribeMessage" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |

## FAQ

### 1. 更多说明

- [requestSubscribeMessage](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)
