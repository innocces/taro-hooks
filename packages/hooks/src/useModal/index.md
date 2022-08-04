---
title: useModal
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 操作反馈
  path: /feedback
---

# useModal

显示模态对话框

## 何时使用

当需要使用模态对话框

## API

```tsx
const show = useModal(initialOption);
```

## 参数说明

### `initialOption: ShowModalOption`

初始提示框配置(若指定后面可与新的配置合并)

| 参数         | 说明                                               | 类型      | 默认值 |
| ------------ | -------------------------------------------------- | --------- | ------ |
| title        | 提示的标题                                         | `string`  | -      |
| content      | 提示的内容                                         | `string`  | -      |
| showCancel   | 是否显示取消按钮                                   | `boolean` | -      |
| confirmText  | 确认按钮的文字，最多 4 个字符                      | `string`  | -      |
| confirmColor | 确认按钮的文字颜色，必须是 16 进制格式的颜色字符串 | `string`  | -      |
| cancelText   | 取消按钮的文字，最多 4 个字符                      | `string`  | -      |
| cancelColor  | 取消按钮的文字颜色，必须是 16 进制格式的颜色字符串 | `string`  | -      |

## 返回值说明

| 返回值 | 说明           | 类型                                                                           |
| ------ | -------------- | ------------------------------------------------------------------------------ |
| show   | 显示消息提示框 | `PromiseOptionalAction<ShowModalOption, Taro.showModal.SuccessCallbackResult>` |

### SuccessCallbackResult

| 返回值  | 说明                                                                                    | 类型      |
| ------- | --------------------------------------------------------------------------------------- | --------- |
| cancel  | 为 true 时，表示用户点击了取消（用于 Android 系统区分点击蒙层关闭还是点击取消按钮关闭） | `boolean` |
| confirm | 为 true 时，表示用户点击了确定按钮                                                      | `boolean` |

## 代码演示

<code src="useModal/index" group="feedback" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
