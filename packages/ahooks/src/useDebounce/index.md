---
title: useDebounce
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

<Alert>注意: 该 Hook 是改写自<a target="__blank" href="https://ahooks.js.org/zh-CN/hooks/use-debounce">ahook useDebounce</a></Alert>

# useDebounce

用来处理防抖值的 Hook。

## 何时使用

当需要使用防抖处理值

## API

```typescript
const debouncedValue = useDebounce(
  value: any,
  options?: Options
);
```

### Params

| 参数    | 说明           | 类型      | 默认值 |
| ------- | -------------- | --------- | ------ |
| value   | 需要防抖的值   | `any`     | -      |
| options | 配置防抖的行为 | `Options` | -      |

### Options

| 参数     | 说明                     | 类型      | 默认值  |
| -------- | ------------------------ | --------- | ------- |
| wait     | 超时时间，单位为毫秒     | `number`  | `1000`  |
| leading  | 是否在延迟开始前调用函数 | `boolean` | `false` |
| trailing | 是否在延迟开始后调用函数 | `boolean` | `true`  |
| maxWait  | 最大等待时间，单位为毫秒 | `number`  | -       |

## 代码演示

<code src="@pages/useDebounce" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
