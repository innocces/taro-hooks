---
title: useNavigationBar
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 操作反馈
  path: /feedback
---

# useNavigationBar

操作导航条: Loading 动画、title 或 Color 以及 HomeButton

## 何时使用

当需要对导航栏客制化时

## API

```tsx
const { setTitle, hideButton, toggleLoading, setColor } =
  useNavigationBar(initialOption);
```

## 参数说明

### `initialOption: NavigationBarOption`

若设置初始参数, 会自动解析来执行对应的操作

| 参数                | 说明       | 类型                                                                                                                             | 默认值 |
| ------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------- | ------ |
| NavigationBarOption | 导航栏配置 | `Partial<SetNavigationBarColorOption & SetNavigationBarTitleOption & ToggleNavigationBarLoadingOption & ToggleHomeButtonOption>` | -      |

### `SetNavigationBarColorOption`

设置导航条颜色参数

| 参数            | 说明                                                                | 类型        | 默认值 |
| --------------- | ------------------------------------------------------------------- | ----------- | ------ |
| backgroundColor | 背景颜色值，有效值为十六进制颜色                                    | `string`    | -      |
| frontColor      | 前景颜色值，包括按钮、标题、状态栏的颜色，仅支持 #ffffff 和 #000000 | `string`    | -      |
| animation       | 动画效果                                                            | `Animation` | -      |

### `SetNavigationBarTitleOption`

设置导航条标题参数

| 参数  | 说明     | 类型     | 默认值 |
| ----- | -------- | -------- | ------ |
| title | 页面标题 | `string` | -      |

### `ToggleNavigationBarLoadingOption`

设置导航条加载状态参数

| 参数    | 说明     | 类型      | 默认值 |
| ------- | -------- | --------- | ------ |
| loading | 是否加载 | `boolean` | -      |

### `ToggleHomeButtonOption`

设置隐藏首页按钮状态参数

| 参数       | 说明             | 类型      | 默认值 |
| ---------- | ---------------- | --------- | ------ |
| hideButton | 是否隐藏首页按钮 | `boolean` | -      |

## 返回值说明

| 返回值        | 说明                        | 类型                                                 |
| ------------- | --------------------------- | ---------------------------------------------------- |
| toggleLoading | 设置导航栏 loading 动画状态 | `PromiseOptionalAction<boolean>`                     |
| setTitle      | 设置导航栏标题              | `PromiseOptionalAction<string>`                      |
| setColor      | 设置导航条颜色              | `PromiseOptionalAction<SetNavigationBarColorOption>` |
| hideButton    | 隐藏返回首页按钮            | `PromiseWithoutOptionAction`                         |

## 代码演示

<code src="useNavigationBar/index" group="feedback" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
