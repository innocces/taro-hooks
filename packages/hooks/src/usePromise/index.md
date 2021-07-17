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

想异步形式调用当前方法时

## API

主要适用于原先由以下方式调用的方法:

```javascript
xx.xxx({
  ....options,
  success: void,
  fail: void,
  complete: void
});
```

转换后使用方式:

```jsx | pure
const methodPromise = usePromise(options, methodName);
methodPromise.then(success).catch(fail).finally(complete);
```

## 参数说明

| 参数       | 说明                           | 类型                 | 默认值 |
| ---------- | ------------------------------ | -------------------- | ------ |
| options    | 对应方法除对应事件外的所有参数 | `General.IAnyObject` | -      |
| methodName | 对应方法名称                   | `String`             | -      |

## 返回值说明

| 返回值        | 说明       | 类型                              |
| ------------- | ---------- | --------------------------------- |
| methodPromise | `执行结果` | `Promise<General.CallbackResult>` |

## 代码演示

<code src="@pages/usePromise" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html)  
见[Taro 文档](https://taro-docs.jd.com/taro/docs/hooks#userouter)
