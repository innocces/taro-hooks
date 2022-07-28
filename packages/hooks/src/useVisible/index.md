---
title: useVisible
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useVisible

获取当前页面是否隐藏或处于后台

## 何时使用

:::info

由于**WEB**的页面隐藏和小程序的时机不一样. 在**WEB**端主要是使用**document.visibilityState**来判断当前的页面状态

:::

当需要根据页面显隐进行判断

## API

```jsx | pure
const visible: boolean = useVisible();
```

## 返回值说明

| 返回值  | 说明                 | 类型      |
| ------- | -------------------- | --------- |
| visible | 当前应用是否处于后台 | `boolean` |

## 代码演示

<code src="useVisible/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |
