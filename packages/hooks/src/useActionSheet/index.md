---
title: useActionSheet
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 操作反馈
  path: /feedback
---

# useActionSheet

显示操作菜单

## 何时使用

当需要使用操作菜单

## API

```tsx
const { tapItem, show } = useActionSheet(initialOption);
```

## 参数说明

### `initialOption: ActionSheetOption`

初始操作菜单配置(若指定后面可与新的配置合并)

| 参数      | 说明                             | 类型       | 默认值 |
| --------- | -------------------------------- | ---------- | ------ |
| alertText | 警示文案                         | `string`   | -      |
| itemList  | 按钮的文字数组，数组长度最大为 6 | `string[]` | -      |
| itemColor | 按钮的文字颜色                   | `string`   | -      |

## 返回值说明

| 返回值  | 说明         | 类型                                                           |
| ------- | ------------ | -------------------------------------------------------------- |
| show    | 显示操作菜单 | `PromiseOptionalAction<ActionSheetOption, ActionSheetTapItem>` |
| tapItem | 当前选中数据 | `ActionSheetTapItem`                                           |

### tapItem

| 返回值   | 说明                                          | 类型     |
| -------- | --------------------------------------------- | -------- |
| tapIndex | 用户点击的按钮序号，从上到下的顺序，从 0 开始 | `number` |
| tapItem  | 用户点击的按钮序号对应 itemList 的字符串      | `string` |

## 代码演示

<code src="useActionSheet/index" group="feedback" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
