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
useUpdateManager((manager, updateInfo) => {
  // do something
});
```

## 参数

当更新信息变化的回调

## 返回值说明

| 返回值     | 说明               | 类型            |
| ---------- | ------------------ | --------------- |
| manager    | 更新管理器实例     | `UpdateManager` |
| updateInfo | 当前更新信息的状态 | `UpdateInfo`    |

### `UpdateInfo`

| 返回值    | 说明             | 类型      |
| --------- | ---------------- | --------- |
| hasUpdate | 是否有新版本     | `boolean` |
| error     | 是否申请更新失败 | `boolean` |
| ready     | 是否准备好更新   | `boolean` |

## 代码演示

<code src="useUpdateManager/index" group="wechat" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
