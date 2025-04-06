---
title: useAppBaseInfo
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 基础
  path: /basic
---

# useAppBaseInfo

获取微信 APP 基础信息

## 何时使用

当需要获取微信 APP 基础信息

## API

```jsx | pure
const appBaseInfo = useAppBaseInfo();
```

## 参数说明

无

## 返回值说明

| 参数                | 类型      | 说明                                                                                                        |
| ------------------- | --------- | ----------------------------------------------------------------------------------------------------------- | --- |
| SDKVersion          | `string`  | 客户端基础库版本                                                                                            |     |
| fontSizeSetting     | `number`  | 用户字体大小（单位 px）。以微信客户端「我-设置-通用-字体大小」中的设置为准                                  |
| fontSizeScaleFactor | `number`  | 微信字体大小缩放比例                                                                                        |
| language            | `string`  | 微信设置的语言                                                                                              |
| host                | `object`  | 当前小程序运行的宿主环境                                                                                    |
| theme               | `string`  | 系统当前主题，取值为`light`或`dark`，全局配置`"darkmode":true`时才能获取，否则为 undefined （不支持小游戏） |
| enableDebug         | `boolean` | 是否已打开调试                                                                                              |
| version             | `string`  | 微信版本号                                                                                                  |

## 代码演示

<code src="useSystemInfo/index" group="basic" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |             |
