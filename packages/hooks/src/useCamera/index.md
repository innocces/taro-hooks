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

```ts
const [cameraContext, { zoom, start, stop, take, listener }] = useCamera();
```

## 参数说明

无

## 返回值说明

| 返回值        | 说明                   | 类型                                                                                                                |
| ------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------- |
| cameraContext | camera 上下文          | `CameraContext`                                                                                                     |
| zoom          | 设置缩放级别           | `PromiseAction<number, CameraContext.StartRecordSuccessCallbackResult>`                                             |
| start         | 开始录像               | `PromiseOptionalAction<ExcludeOption<CameraContext.StartRecordOption>>`                                             |
| stop          | 结束录像               | `PromiseOptionalAction<boolean,CameraContext.StopRecordSuccessCallbackResult>`                                      |
| take          | 拍照                   | `PromiseOptionalAction<ExcludeOption<CameraContext.TakePhotoOption>, CameraContext.TakePhotoSuccessCallbackResult>` |
| listener      | 获取 Camera 实时帧数据 | `(callback: CameraContext.OnCameraFrameCallback) => CameraFrameListener`                                            |

## 代码演示

<code src="useCamera/index" group="device" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
