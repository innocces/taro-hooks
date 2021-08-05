---
title: useCamera
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 媒体
  path: /media
---

# useCamera

相机操作等.

## 何时使用

当需要对相机进行操作时

## API

```jsx | pure
const [
  cameraContext,
  { create, startRecord, stopRecord, takePhoto, onCameraFrame },
] = useCamera();
```

## 参数说明

无

## 返回值说明

| 返回值        | 说明               | 类型                                                                                                                         |
| ------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| cameraContext | camera 上下文      | `CameraContext &#124; undefined`                                                                                             |
| startRecord   | 开始录制视屏       | `(callback?: CameraContext.StartRecordTimeoutCallback) => Promise<General.CallbackResult>`                                   |
| stopRecord    | 结束录制视频       | `() => Promise<General.CallbackResult &#124; CameraContext.StopRecordSuccessCallbackResult>`                                 |
| takePhoto     | 拍照               | `(option: Partial<Pick<CameraContext.TakePhotoOption, 'quality'>>) => Promise<CameraContext.TakePhotoSuccessCallbackResult>` |
| create        | 创建 camera 上下文 | `() => ICameraContext`                                                                                                       |

## 代码演示

<code src="@pages/useCamera" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
