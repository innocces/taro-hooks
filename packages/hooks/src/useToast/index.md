---
title: useToast
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 操作反馈
  path: /feedback
---

# useToast

显示或隐藏消息提示框

## 何时使用

当需要使用消息提示框

## API

```tsx
const { show, hide } = useToast(initialOption);
```

## 参数说明

### `initialOption: ToastOption`

初始提示框配置(若指定后面可与新的配置合并)

| 参数     | 说明                                          | 类型                                          | 默认值 |
| -------- | --------------------------------------------- | --------------------------------------------- | ------ |
| title    | 提示的内容                                    | `string`                                      | -      |
| duration | 提示的延迟时间                                | `number`                                      | -      |
| icon     | 图标                                          | `"success" or "error" or "loading" or "none"` | -      |
| image    | 自定义图标的本地路径，image 的优先级高于 icon | `string`                                      | -      |
| mask     | 是否显示透明蒙层，防止触摸穿透                | `boolean`                                     | -      |

## 返回值说明

| 返回值 | 说明           | 类型                                 |
| ------ | -------------- | ------------------------------------ |
| show   | 显示消息提示框 | `PromiseOptionalAction<ToastOption>` |
| hide   | 隐藏提示框     | `PromiseWithoutOptionAction`         |

## 代码演示

<code src="useToast/index" group="feedback" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
