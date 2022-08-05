---
title: useAlertBeforeUnload
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 操作反馈
  path: /feedback
---

# useAlertBeforeUnload

小程序页面返回询问对话框

## 何时使用

当需要在小程序页面返回询问对话框时

## API

```tsx
const { enable, disable } = useAlertBeforeUnload();
```

## 参数说明

无

## 返回值说明

| 参数    | 类型                         | 说明                         |
| ------- | ---------------------------- | ---------------------------- |
| enable  | `PromiseAction<string>`      | 开启小程序页面返回询问对话框 |
| disable | `PromiseWithoutOptionAction` | 关闭小程序页面返回询问对话框 |

## 代码演示

<code src="useAlertBeforeUnload/index" group="feedback" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
