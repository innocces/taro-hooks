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
const [videoContext, { choose, save, create }] = useVideo(initialOption?);
```

## 参数说明

| 参数          | 说明                                         | 类型                                                                          | 默认值 |
| ------------- | -------------------------------------------- | ----------------------------------------------------------------------------- | ------ |
| initialOption | 初始选择视频配置(若指定后面可与新的配置合并) | `Pick<chooseVideo.Option, 'camera' &#124; 'sourceType' &#124; 'maxDuration'>` | -      |

## 返回值说明

| 返回值       | 说明              | 类型                                                                 |
| ------------ | ----------------- | -------------------------------------------------------------------- |
| videoContext | video 上下文      | `VideoContext &#124; undefined`                                      |
| choose       | 选择视频          | `(option?: IOptions) => Promise<chooseVideo。SuccessCallbackResult>` |
| save         | 保存视频          | `(filePath: string,) => Promise<General.CallbackResult>`             |
| create       | 创建 Video 上下文 | `(id: string, component?: Record<string, any>,) => IVideoContext`    |

## 代码演示

<code src="@pages/useCamera" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
