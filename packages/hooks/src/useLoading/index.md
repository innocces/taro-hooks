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

```tsx
const { show, hide } = useLoading(initialOption);
```

## 参数说明

### `initialOption: PartialLoadingOption`

初始提示框配置(若指定后面可与新的配置合并)

| 参数  | 说明                           | 类型      | 默认值 |
| ----- | ------------------------------ | --------- | ------ |
| title | 提示的内容                     | `string`  | -      |
| mask  | 是否显示透明蒙层，防止触摸穿透 | `boolean` | -      |

## 返回值说明

| 返回值 | 说明           | 类型                                                                      |
| ------ | -------------- | ------------------------------------------------------------------------- |
| show   | 显示加载提示框 | `PromiseOptionalAction<TaroGeneral.CallbackResult, PartialLoadingOption>` |
| hide   | 隐藏提示框     | `PromiseWithoutOptionAction`                                              |

## 代码演示

<code src="useLoading/index" group="feedback" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
