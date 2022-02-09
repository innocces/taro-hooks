---
title: useUnmount
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

<Alert>注意: 该 Hook 是来自<a target="__blank" href="https://ahooks.js.org/zh-CN/hooks/use-unmount">ahook useUnmount</a>. 主要是为了分离主包</Alert>

# useUnmount

在组件卸载（unmount）时执行的 Hook。

## 何时使用

当需监听组件卸载时

## API

```typescript
useUnmount(fn: () => void);
```

### Params

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |

## 代码演示

<code src="@pages/useUnmount" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
