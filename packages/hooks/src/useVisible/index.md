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

<code src="@pages/useVisible" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |             |
