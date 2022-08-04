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

:::info

新版本的**useFile**新增了相关事件的参数配置. 但和小程序中的事件略有出入. 由于**taro-hooks**采用的是**Promise**的方式编写. 这边事件名称分别要看下面的描述来区分

:::

# useFile

上传、下载文件

## 何时使用

当需要上传下载文件时

## API

```jsx
const { download, upload } = useFile();
```

## 返回值说明

| 返回值   | 说明     | 类型                                                                         |
| -------- | -------- | ---------------------------------------------------------------------------- |
| download | 下载文件 | `PromiseAction<DownloadOption, Taro.downloadFile.FileSuccessCallbackResult>` |
| upload   | 上传文件 | `PromiseAction<UploadOption, Taro.uploadFile.SuccessCallbackResult>`         |

### DownloadOption

| 参数           | 说明                                                 | 类型                                               | 默认值 |
| -------------- | ---------------------------------------------------- | -------------------------------------------------- | ------ |
| url            | 下载资源的 url                                       | `string`                                           | -      |
| filePath       | 指定文件下载后存储的路径                             | `string`                                           | -      |
| header         | HTTP 请求的 Header，Header 中不能设置 Referer        | `TaroGeneral.IAnyObject`                           | -      |
| progress       | 监听下载进度变化事件                                 | `DownloadTask['onProgressUpdate']`                 | -      |
| headersReceive | 监听 HTTP Response Header 事件。会比请求完成事件更早 | `DownloadTask['onHeadersReceived']`                | -      |
| afterSend      | 实例后挂载对应监听方法                               | `(task: DownloadTask.DownloadTaskPromise) => void` | -      |

### UploadOption

| 参数           | 说明                                                                | 类型                                           | 默认值 |
| -------------- | ------------------------------------------------------------------- | ---------------------------------------------- | ------ |
| url            | 开发者服务器地址                                                    | `string`                                       | -      |
| filePath       | 要上传文件资源的路径                                                | `string`                                       | -      |
| name           | 文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容 | `string`                                       | -      |
| formData       | HTTP 请求中其他额外的 form data                                     | `TaroGeneral.IAnyObject`                       | -      |
| timeout        | 超时时间，单位为毫秒                                                | `number`                                       | -      |
| header         | HTTP 请求的 Header，Header 中不能设置 Referer                       | `TaroGeneral.IAnyObject`                       | -      |
| fileName       | 上传的文件名, API 支持度: h5                                        | `string`                                       | -      |
| progress       | 监听下载进度变化事件                                                | `UploadTask['onProgressUpdate']`               | -      |
| headersReceive | 监听 HTTP Response Header 事件。会比请求完成事件更早                | `UploadTask['onHeadersReceived']`              | -      |
| afterSend      | 实例后挂载对应监听方法                                              | `(task: UploadTask.UploadTaskPromise) => void` | -      |

## 代码演示

<code src="useFile/index" group="network" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

1. 如何**abort**下载或上传?

   可以使用**afterSend**监听方法获取到**xxxTask.xxxTaskPromise**.

   ```tsx showLineNumbers
   import { useTaroRef } from '@tarojs/taro';

   const task = useTaroRef<UploadTask.UploadTaskPromise>();

   const afterSend = (concurrentTask) => (task.current = concurrentTask);

   // then

   task.current.abort();
   ```
