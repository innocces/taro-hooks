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

音频操作等.

## 何时使用

当需要进行音频操作时

## API

```jsx | pure
const [
  audioContext,
  audioSource,
  {
    create: createAudioContext,
    setOption: setAudioOption,
    getAudioSource: getAudioSourceAsync,
    play,
    pause,
    stop,
    seek,
    destory,
    onCanPlay,
    onEnded,
    onError,
    onPause,
    onPlay,
    onSeeked,
    onSeeking,
    onStop,
    onTimeUpdate,
    onWaiting,
    offCanPlay,
    offEnded,
    offError,
    offPause,
    offPlay,
    offSeeked,
    offSeeking,
    offStop,
    offTimeUpdate,
    offWaiting,
  },
] = useAudio(initOptions);
```

## 参数说明

##### 以下均为`initOptions`

| 参数           | 说明                                                  | 类型      | 默认值  |
| -------------- | ----------------------------------------------------- | --------- | ------- |
| autoplay       | 是否自动开始播放(若指定后面可与新的配置合并)          | `boolean` | `false` |
| loop           | 是否循环播放(若指定后面可与新的配置合并)              | `boolean` | `false` |
| src            | 音频资源的地址(若指定后面可与新的配置合并)            | `string`  | -       |
| volume         | 音量。范围 0~1(若指定后面可与新的配置合并)            | `number`  | `1`     |
| startTime      | 开始播放的位置（单位：s）(若指定后面可与新的配置合并) | `number`  | `0`     |
| mixWithOther   | 是否与其他音频混播(若指定后面可与新的配置合并)        | `boolean` | -       |
| obeyMuteSwitch | 是否遵循系统静音开关(若指定后面可与新的配置合并)      | `boolean` | `true`  |

## 返回值说明

| 返回值         | 说明                                                       | 类型                                                                                                |
| -------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| audioContext   | 全局唯一音频实例                                           | `InnerAudioContext &#124; undefined`                                                                |
| audioSource    | 当前支持的音频输入源                                       | `getAvailableAudioSources.SuccessCallbackResult['audioSources'] &#124; undefined`                   |
| create         | 创建全局唯一音频实例                                       | `(initOptions?: Partial<initOptions>) => IAudioContext`                                             |
| setOption      | 设置音频实例                                               | `(option?: Partial<initOptions>, instance?: InnerAudioContext,) => Promise<General.CallbackResult>` |
| getAudioSource | 获取当前支持的音频输入源                                   | `() => Promise<getAvailableAudioSources.SuccessCallbackResult>`                                     |
| play           | 播放(可指定播放文件 src)                                   | `(src?: string) => void`                                                                            |
| pause          | 暂停                                                       | `() => void`                                                                                        |
| stop           | 停止                                                       | `() => void`                                                                                        |
| seek           | 跳转到指定位置，单位 s                                     | `(position: number) => void`                                                                        |
| destory        | 销毁当前实例                                               | `() => void`                                                                                        |
| onCanPlay      | 音频进入可以播放状态，但不保证后面可以流畅播放             | `(callback: INormalAction) => void`                                                                 |
| onEnded        | 音频自然播放结束事件                                       | `(callback: INormalAction) => void`                                                                 |
| onError        | 音频播放错误事件                                           | `(callback: (res: InnerAudioContext.onErrorDetail) => void,) => void`                               |
| onPlay         | 音频播放事件                                               | `(callback: INormalAction) => void`                                                                 |
| onPause        | 音频暂停事件                                               | `(callback: INormalAction) => void`                                                                 |
| onSeeked       | 音频完成 seek 操作事件                                     | `(callback: INormalAction) => void`                                                                 |
| onSeeking      | 音频进行 seek 操作事件                                     | `(callback: INormalAction) => void`                                                                 |
| onStop         | 音频停止事件                                               | `(callback: INormalAction) => void`                                                                 |
| onTimeUpdate   | 音频播放进度更新事件                                       | `(callback: INormalAction) => void`                                                                 |
| onWaiting      | 音频加载中事件，当音频因为数据不足，需要停下来加载时会触发 | `(callback: INormalAction) => void`                                                                 |
| offCanPlay     | 取消监听 onCanplay 事件                                    | `(callback: INormalAction) => void`                                                                 |
| offEnded       | 取消监听 onEnded 事件                                      | `(callback: INormalAction) => void`                                                                 |
| offError       | 取消监听 onError 事件                                      | `(callback: INormalAction) => void`                                                                 |
| offPause       | 取消监听 onPause 事件                                      | `(callback: INormalAction) => void`                                                                 |
| offPlay        | 取消监听 onPlay 事件                                       | `(callback: INormalAction) => void`                                                                 |
| offSeeked      | 取消监听 onSeeked 事件                                     | `(callback: INormalAction) => void`                                                                 |
| offSeeking     | 取消监听 onSeeking 事件                                    | `(callback: INormalAction) => void`                                                                 |
| offStop        | 取消监听 onStop 事件                                       | `(callback: INormalAction) => void`                                                                 |
| offTimeUpdate  | 取消监听 onTimeUpdate 事件                                 | `(callback: INormalAction) => void`                                                                 |
| offWaiting     | 取消监听 onWaiting 事件                                    | `(callback: INormalAction) => void`                                                                 |

## 代码演示

<code src="@pages/useAudio" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
