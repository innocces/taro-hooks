---
title: useApp
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useApp

获取当前程序的唯一实例以及全局数据

## 何时使用

当需要获取程序实例或操作全局数据时

## API

```ts
const {
  app,
  globalData,
  setGlobalData
} = useApp<T, R>(allowDefault?: boolean)
```

## 参数

| 参数         | 说明                                                                                                      | 类型      | 默认值 |
| ------------ | --------------------------------------------------------------------------------------------------------- | --------- | ------ |
| allowDefault | 在 App 未定义时返回默认实现。当 App 被调用时，默认实现中定义的属性会被覆盖合并到 App 中。一般用于独立分包 | `boolean` | -      |

## 返回值说明

| 返回值        | 说明                         | 类型                                                                       |
| ------------- | ---------------------------- | -------------------------------------------------------------------------- |
| app           | 小程序全局唯一 APP 实例      | `Instance<T>`                                                              |
| globalData    | 全局数据(须在 app.ts 中定义) | `GlobalData<R>`                                                            |
| setGlobalData | 动态修改全局数据             | `(key: keyof R, value: R[keyof R]) => Promise<TaroGeneral.CallbackResult>` |

## 代码演示

<code src="useApp/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

1. 部分字段不可以设置. 会导致无法获取到值. 请注意以下保护字段
   ```ts
   ['config', 'onHide', 'onLaunch', 'onShow'];
   ```
