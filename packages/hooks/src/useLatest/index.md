---
title: useLatest
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

<Alert>注意: 该 Hook 是来自<a target="__blank" href="https://ahooks.js.org/zh-CN/hooks/use-latest">ahook useLatest</a>. 主要是为了分离主包</Alert>

# useLatest

返回当前最新值的 Hook，可以避免闭包问题。

## 何时使用

当需获取最新值时。

## API

```typescript
const latestValueRef = useLatest<T>(value: T): MutableRefObject<T>;
```

### Params

| 参数  | 说明     | 类型 | 默认值 |
| ----- | -------- | ---- | ------ |
| value | 获取的值 | `T`  | -      |

## 代码演示

<code src="@pages/useLatest" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
