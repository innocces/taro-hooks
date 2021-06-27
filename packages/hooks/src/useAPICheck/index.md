---
title: useAPICheck
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useAPICheck

判断小程序的 API，回调，参数，组件等是否在当前版本可用(仅小程序端可用)

## 何时使用

无法判断该 API 在当前版本内是否可用时

## API

```jsx | pure
(scheme: string) => boolean;
```

## 参数说明

### 1. `API.method.param.option`

- `API`: 代表 API 名字
- `method`: 代表调用方法, 有效值为:
  ```typescript | pure
  enum METHOD {
    RETURN = 'return',
    SUCCESS = 'success',
    OBJECT = 'object',
    CALLBACK = 'callback',
  }
  ```
- `param`: 代表参数或者返回值
- `option`: 代表参数的可选值或者返回值的属性

### 2. `component.attribute.option`

- `component`: 代表组件名字
- `attribute`: 代表组件属性
- `option`: 代表组件属性的可选值

## 代码演示

<code src="@pages/useAPICheck" />

## FAQ

### 1. 更多说明

见[小程序相关文档](https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html)
