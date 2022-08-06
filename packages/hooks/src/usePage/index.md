---
title: usePage
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# usePage

获取当前页面(栈)

## 何时使用

当需要获取页面实例或页面栈信息时

## API

```jsx | pure
const [stackLength, { pageInstance, pageStack }] = usePage(scope?: string);
```

## 参数

| 参数  | 说明           | 类型     | 默认值 |
| ----- | -------------- | -------- | ------ |
| scope | 组件内的选择器 | `string` | -      |

## 返回值说明

| 返回值       | 说明                                                   | 类型      |
| ------------ | ------------------------------------------------------ | --------- |
| stackLength  | 页面栈长度                                             | `number`  |
| pageInstance | 当前页面实例(包含`app`)                                | `Current` |
| pageStack    | 页面栈(数组中第一个元素为首页，最后一个元素为当前页面) | `Page[]`  |

## 代码演示

<code src="usePage/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

- 请勿直接修改获取到的页面栈, 会导致页面状态或路由错误

- `useScope`的`selector`参数请配合`CustomWrapper`使用(相关[传送门](https://github.com/NervJS/taro/issues/9357))
