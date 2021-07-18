---
title: useLoading
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 操作反馈
  path: /feedback
---

# useLoading

显示或隐藏加载提示框

## 何时使用

当需要使用加载提示框

## API

```jsx | pure
const [show, hide] = useLoading(initialOption);
```

## 参数说明

| 参数          | 说明                                       | 类型                 | 默认值 |
| ------------- | ------------------------------------------ | -------------------- | ------ |
| initialOption | 初始提示框配置(若指定后面可与新的配置合并) | `General.IAnyObject` | -      |

## 返回值说明

| 返回值 | 说明           | 类型                                             |
| ------ | -------------- | ------------------------------------------------ |
| show   | 显示加载提示框 | `(options?: General.IAnyObject) => Promise<any>` |
| hide   | 隐藏提示框     | `() => Promise<any>`                             |

## 代码演示

<code src="@pages/useLoading" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
