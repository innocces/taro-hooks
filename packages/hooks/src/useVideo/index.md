---
title: useVideo
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 媒体
  path: /media
---

# useVideo

视频操作, 如保存、选择等.

## 何时使用

当需要对视频进行操作时

## API

```ts
const [
  videoContext,
  {
    choose,
    chooseMedia,
    open,
    save,
    compress,
    get,
  },
] = useVideo(id, option?);
```

## 参数说明

:::tip

**id**为必传的参数. 因为会在初始阶段创建和**id**条件相符的全局**video**唯一上下文！

:::

| 参数   | 说明                                         | 类型                                     | 默认值 |
| ------ | -------------------------------------------- | ---------------------------------------- | ------ |
| id     | video 组件的 id                              | `string`                                 | -      |
| option | 初始选择视频配置(若指定后面可与新的配置合并) | `ExcludeOption<Taro.chooseVideo.Option>` | -      |

## 返回值说明

| 返回值       | 说明                                  | 类型                                                                                                    |
| ------------ | ------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| videoContext | video 上下文                          | `VideoContext`                                                                                          |
| choose       | 拍摄视频或从手机相册中选视频          | `PromiseOptionalAction<ChooseOption, Taro.chooseVideo.SuccessCallbackResult>`                           |
| chooseMedia  | 拍摄或从手机相册中选择图片或视频      | `PromiseOptionalAction<ExcludeOption<Taro.chooseMedia.Option>, Taro.chooseMedia.SuccessCallbackResult>` |
| open         | 打开视频编辑器                        | `PromiseAction<string, Taro.openVideoEditor.SuccessCallbackResult>`                                     |
| save         | 保存视频到系统相册。支持 mp4 视频格式 | `PromiseAction<string>`                                                                                 |
| compress     | 压缩视频接口                          | `PromiseAction<ExcludeOption<Taro.compressVideo.Option>, Taro.compressVideo.SuccessCallbackResult>`     |
| get          | 获取视频详细信息                      | `PromiseAction<string, Taro.getVideoInfo.SuccessCallbackResult>`                                        |

## 代码演示

<code src="useVideo/index" group="media" />

## Hook 支持度

| 微信小程序 |    H5    | ReactNative |
| :--------: | :------: | :---------: |
|     ✔️     | ✔️(部分) |     ✔️      |
