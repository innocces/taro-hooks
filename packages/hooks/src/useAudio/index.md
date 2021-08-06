---
title: useAudio
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 媒体
  path: /media
---

# useAudio

录音操作等.

## 何时使用

当需要进行录音操作时

## API

```jsx | pure
const [
  recorderManager,
  recorderManagerStatus,
  {
    onError,
    onFrameRecorded,
    onInterruptionBegin,
    onInterruptionEnd,
    onPause,
    onResume,
    onStart,
    onStop,
    startRecord,
    stopRecord,
    pauseRecord,
    resumeRecord,
  },
] = useAudio();
```

## 参数说明

无

## 返回值说明

| 返回值                | 说明                                     | 类型                                                                       |
| --------------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| recorderManager       | 全局唯一录音管理器                       | `RecorderManager &#124; undefined`                                         |
| recorderManagerStatus | 当前录音管理器状态                       | `RecordStatus &#124; undefined`                                            |
| onError               | 监听录音错误事件                         | `(callback: RecorderManager.OnErrorCallback) => void`                      |
| onFrameRecorded       | 监听已录制完指定帧大小的文件事件。       | `(callback: RecorderManager.OnFrameRecordedCallback) => void`              |
| onInterruptionBegin   | 监听录音因为受到系统占用而被中断开始事件 | `(callback: General.EventCallback) => void`                                |
| onInterruptionEnd     | 监听录音中断结束事件                     | `(callback: General.EventCallback) => void`                                |
| onPause               | 监听录音暂停事件                         | `(callback: General.EventCallback) => void`                                |
| onResume              | 监听录音继续事件                         | `(callback: General.EventCallback) => void`                                |
| onStart               | 监听录音开始事件                         | `(callback: General.EventCallback) => void`                                |
| onStop                | 监听录音结束事件                         | `(callback: RecorderManager.OnStopCallback) => void`                       |
| startRecord           | 开始录音                                 | `(option: RecorderManager.StartOption) => Promise<General.CallbackResult>` |
| stopRecord            | 结束录音                                 | `() => Promise<General.CallbackResult>`                                    |
| pauseRecord           | 暂停录音                                 | `() => Promise<General.CallbackResult>`                                    |
| resumeRecord          | 继续录音                                 | `() => Promise<General.CallbackResult>`                                    |

## 代码演示

<code src="@pages/useAudio" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
