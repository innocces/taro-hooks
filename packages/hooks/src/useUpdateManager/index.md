---
title: useUpdateManager
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 小程序
  path: /wechat
---

# useUpdateManager

获取全局唯一版本更新管理器

## 何时使用

管理小程序更新机制。

## API

```jsx | pure
const updateManager = useUpdateManager({
  onCheckForUpdate,
  onUpdateReady,
  onUpdateFailed,
});
```

## 入参说明

```tsx | pure
function onCheckForUpdate(manager, res) {}

function onUpdateReady(manager) {}

function onUpdateFailed(manager) {}
```

## 返回值说明

| 返回值        | 说明           | 类型            |
| ------------- | -------------- | --------------- |
| updateManager | 更新管理器实例 | `UpdateManager` |

## 代码演示

<code src="@pages/useUpdateManager" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
