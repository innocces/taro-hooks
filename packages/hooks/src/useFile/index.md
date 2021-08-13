---
title: useFile
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 网络
  path: /network
---

# useFile

上传、下载文件

## 何时使用

当需要上传下载文件时

## API

```jsx | pure
const { download, upload } = useFile();
```

## 返回值说明

| 返回值   | 说明     | 类型                                                                                                         |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------ |
| download | 下载文件 | `(option: IUploadOption) => Promise<uploadFile.SuccessCallbackResult &#124; General.CallbackResult>`         |
| upload   | 上传文件 | `(option: IDownloadOption) => Promise<downloadFile.FileSuccessCallbackResult &#124; General.CallbackResult>` |

## 代码演示

<code src="@pages/useFile" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
