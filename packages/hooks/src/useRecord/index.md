---
title: useRecord
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 媒体
  path: /media
---

# useRecord

录音操作等.

## 何时使用

当需要进行录音操作时

## API

```ts
const [recorderManager, { start, stop }] = useRecord();
```

## 参数说明

无

## 返回值说明

| 返回值          | 说明               | 类型                                                                       |
| --------------- | ------------------ | -------------------------------------------------------------------------- |
| recorderManager | 全局唯一录音管理器 | `RecorderManager`                                                          |
| start           | 开始录音           | `(option: RecorderManager.StartOption) => Promise<General.CallbackResult>` |
| stop            | 结束录音           | `PromiseWithoutOptionAction<RecorderManager.OnStopCallbackResult>`         |

## 代码演示

<code src="useAudio/index" group="media" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     |     |     ✔️      |
