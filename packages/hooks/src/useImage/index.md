---
title: useImage
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 媒体
  path: /media
---

# useImage

图片操作, 如预览、获取、压缩等.

## 何时使用

当需要对图片进行操作时

## API

```ts
const [
  fileInfo,
  { choose, compress, get, preview, previewMedia, save, edit }
] = useImage(option?);
```

## 参数说明

| 参数   | 说明                                         | 类型                                     | 默认值 |
| ------ | -------------------------------------------- | ---------------------------------------- | ------ |
| option | 初始拾取图片配置(若指定后面可与新的配置合并) | `ExcludeOption<Taro.chooseImage.Option>` | -      |

## 返回值说明

| 返回值       | 说明               | 类型                                                                                                                                                                                                                   |
| ------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| fileInfo     | 当前选中的图片     | `Omit<Taro.chooseImage.SuccessCallbackResult, 'errMsg'>`                                                                                                                                                               |
| choose       | 选择(会话)图片     | `PromiseParamsAction<(option?: ChooseOption \| ExcludeOption<Taro.chooseMessageFile.Option>, messageFile?: boolean) => void, Taro。chooseImage.SuccessCallbackResult \| Taro.chooseMessageFile.SuccessCallbackResult>` |
| compress     | 压缩图片           | ` PromiseParamsAction<(src: string, quality?: number) => void, CompressSuccessResult>`                                                                                                                                 |
| get          | 获取图片资源详情   | `PromiseAction<string, Taro.getImageInfo.SuccessCallbackResult>`                                                                                                                                                       |
| preview      | 预览               | `PromiseAction<ExcludeOption<Taro.previewImage.Option>>`                                                                                                                                                               |
| previewMedia | 预览图片和视频     | `PromiseAction<ExcludeOption<Taro.previewMedia.Option>>`                                                                                                                                                               |
| save         | 保存图片到系统相册 | `PromiseAction<string>`                                                                                                                                                                                                |
| edit         | 编辑图片接口       | `PromiseAction<string, Taro.editImage.SuccessCallbackResult>`                                                                                                                                                          |

## 代码演示

<code src="useImage/index" group="media" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
