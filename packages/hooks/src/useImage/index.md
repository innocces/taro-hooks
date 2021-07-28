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

```jsx | pure
const [
  fileInfo,
  { choose, chooseMessageFile, preview, save, getInfo, compress },
] = useImage(initialOption);
```

## 参数说明

| 参数          | 说明                                         | 类型                                                                               | 默认值 |
| ------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- | ------ |
| initialOption | 初始拾取图片配置(若指定后面可与新的配置合并) | `Partial<Pick<chooseImage.Option, 'count' &#124; 'sizeType' &#124; 'sourceType'>>` | -      |

## 返回值说明

| 返回值            | 说明              | 类型                                                                                                                                                                    |
| ----------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| choose            | 选择图片          | `(option: ChooseImageOption) => Promise<chooseImage.SuccessCallbackResult>`                                                                                             |
| chooseMessageFile | 选择会话资源      | `(count: number,type?: Pick<chooseMessageFile.Option, 'type'>,extend?: Pick<chooseMessageFileOption, 'extension'>) => Promise<chooseMessageFile.SuccessCallbackResult>` |
| preview           | 预览图片          | `(option: PreviewImageOption) => Promise<General.CallbackResult>`                                                                                                       |
| save              | 保存图片(h5 支持) | `(filePath: string) => Promise<General.CallbackResult>`                                                                                                                 |
| getInfo           | 获取图片资源详情  | `(src: string) => Promise<getImageInfo.SuccessCallbackResult>`                                                                                                          |
| compress          | 压缩图片(h5 支持) | `(src: string,quality?: number) => Promise<compressImage.SuccessCallbackResult>`                                                                                        |

## 代码演示

<code src="@pages/useImage" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
