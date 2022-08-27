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

```ts
const [audioContext, { sources, setOption, play }] = useAudio(initOptions);
```

## 参数说明

##### 以下均为`initOptions`

| 参数           | 说明                                                                                                                          | 类型      | 默认值  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| autoplay       | 是否自动开始播放 (若指定后面可与新的配置合并)                                                                                 | `boolean` | `false` |
| loop           | 是否循环播放 (若指定后面可与新的配置合并)                                                                                     | `boolean` | `false` |
| src            | 音频资源的地址，用于直接播放(若指定后面可与新的配置合并)                                                                      | `string`  | -       |
| volume         | 音量。范围 0~1(若指定后面可与新的配置合并)                                                                                    | `number`  | `1`     |
| startTime      | 开始播放的位置（单位：s），默认为 0 (若指定后面可与新的配置合并)                                                              | `number`  | `0`     |
| mixWithOther   | 是否与其他音频混播(若指定后面可与新的配置合并)                                                                                | `boolean` | -       |
| obeyMuteSwitch | 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音 (若指定后面可与新的配置合并) | `boolean` | `true`  |

## 返回值说明

| 返回值       | 说明                     | 类型                                                                 |
| ------------ | ------------------------ | -------------------------------------------------------------------- |
| audioContext | 全局唯一音频实例         | `InnerAudioContext`                                                  |
| sources      | 当前支持的音频输入源     | `getAvailableAudioSources.SuccessCallbackResult['audioSources']`     |
| setOption    | 设置音频实例             | `(option?: Partial<initOptions>) => Promise<General.CallbackResult>` |
| play         | 播放(可指定播放文件 src) | `(src?: string) => void`                                             |

## 代码演示

<code src="useAudio/index" group="media" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |

## FAQ

- 注意: iOS 在静音状态下, `innerAudio`会遵循静音原则无声音. 若需要在静音状态下播放声音. 可增加配置项如下

  ```js
  {
    obeyMuteSwitch: false;
  }
  ```
