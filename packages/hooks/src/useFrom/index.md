---
title: useFrom
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useFrom

路由相关, 扩充 `Taro useRouter` , 获取来源页面信息

## 何时使用

当需要获取来源页面信息时

## API

```jsx | pure
const from = useFrom();
```

## 参数说明

无

## 返回值说明

| 返回值 | 说明             | 类型  |
| ------ | ---------------- | ----- | ----- |
| from   | 来源页面路由信息 | `Page | null` |

## 代码演示

<code src="useFrom/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
