---
title: useWebp
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useWebp

判断能否使用 WebP 格式

## 何时使用

无法判断该 WebP 在当前版本内是否可用时

## API

```ts
const canIUseWebp = useWebp();
```

## 返回值说明

| 返回值      | 说明     | 类型      |
| ----------- | -------- | --------- |
| canIUseWebp | 是否可用 | `boolean` |

## 代码演示

<code src="useWebp/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
