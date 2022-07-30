---
title: usePromise
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# usePromise

提供`Promise`化方式

## 何时使用

:::caution

**1x**版本为直接执行传入的方法. 在**新版本**中则采用吞吐自定义**hook**的形式. 这是一个**break change**  
不过现在大部分的**API**官方已经提供了**Promise**的调用形式. 这里更推荐大家直接使用官方的**Promise**

:::

想异步形式调用当前方法时

## API

主要适用于原先由以下方式调用的方法:

```jsx
Taro.makePhoneCall({
  phoneNumber: '110',
});
```

转换后使用方式:

```tsx
import { makePhoneCall } from '@tarojs/taro';
type Option = Taro.makePhoneCall.Option;
const makePhoneCall = usePromise<Option>('makePhoneCall');

// 在组件中使用
const handleMakePhoneCall = () => {
  makePhoneCall({ phoneNumber: '110' }).then(
    () => {
      console.log('makePhoneCall success');
    },
    ({ errMsg }) => {
      console.log('makePhoneCall failed', errMsg);
    },
  );
};
```

## 参数说明

| 参数            | 说明         | 类型      | 默认值 |
| --------------- | ------------ | --------- | ------ |
| implementMethod | 待执行的方法 | `unknown` | -      |

## 返回值说明

| 返回值       | 说明             | 类型                                                  |
| ------------ | ---------------- | ----------------------------------------------------- |
| promiseMetod | `Promise方式API` | `(option?: T) => Promise<TaroGeneral.CallbackResult>` |

## 代码演示

<code src="usePromise/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
