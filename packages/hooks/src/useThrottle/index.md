---
title: useThrottle
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

<Alert>注意: 该 Hook 是改写自<a target="__blank" href="https://ahooks.js.org/zh-CN/hooks/use-throttle">ahook useThrottle</a></Alert>

# useThrottle

用来处理节流值的 Hook。

## 何时使用

当需处理节流值

## API

```typescript
const throttledValue = useThrottle(
  value: any,
  options?: Options
);
```

### Params

| 参数    | 说明           | 类型      | 默认值 |
| ------- | -------------- | --------- | ------ |
| value   | 需要节流的值   | `any`     | -      |
| options | 配置节流的行为 | `Options` | -      |

### Options

| 参数     | 说明                     | 类型      | 默认值 |
| -------- | ------------------------ | --------- | ------ |
| wait     | 等待时间，单位为毫秒     | `number`  | `1000` |
| leading  | 是否在延迟开始前调用函数 | `boolean` | `true` |
| trailing | 是否在延迟开始后调用函数 | `boolean` | `true` |

## 代码演示

<code src="@pages/useThrottle" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
