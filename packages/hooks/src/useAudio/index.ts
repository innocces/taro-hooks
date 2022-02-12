import {
  createInnerAudioContext,
  setInnerAudioOption,
  getAvailableAudioSources,
  InnerAudioContext,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import type { getAvailableAudioSources as IGetAvailableAudioSources } from '@tarojs/taro';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

export interface ICreateInnerAudioContextOption {
  useWebAudioImplement?: boolean;
}
export type ICreateInnerAudioContext = (
  option?: ICreateInnerAudioContextOption,
) => InnerAudioContext;
export type IAudioContext = InnerAudioContext | undefined;

export type IAudioSource =
  | IGetAvailableAudioSources.SuccessCallbackResult['audioSources']
  | undefined;
export interface IOption
  extends Partial<setInnerAudioOption.Option & ICreateInnerAudioContextOption> {
  autoplay: boolean;
  loop: boolean;
  src: string;
  startTime: number;
  volume: number;
}

export type ICreateAction = (createOption?: Partial<IOption>) => IAudioContext;

export type ISetOptionAction = (
  option?: Partial<IOption>,
  instance?: InnerAudioContext,
) => Promise<TaroGeneral.CallbackResult>;

export type IGetAudioSourceAction =
  () => Promise<getAvailableAudioSources.SuccessCallbackResult>;

export type IPlayAction = (src?: string) => void;

export type ISeekAction = (position: number) => void;

export type INormalAction = () => void;

export type INormalEventAction = (callback: INormalAction) => void;

export type IOnErrorAction = (
  callback: (res: InnerAudioContext.onErrorDetail) => void,
) => void;
export interface IAction {
  create: ICreateAction;
  setOption: ISetOptionAction;
  getAudioSource: IGetAudioSourceAction;
  play: IPlayAction;
  stop: INormalAction;
  pause: INormalAction;
  seek: ISeekAction;
  destory: INormalAction;
  onCanPlay: INormalEventAction;
  onPlay: INormalEventAction;
  onPause: INormalEventAction;
  onStop: INormalEventAction;
  onEnded: INormalEventAction;
  onTimeUpdate: INormalEventAction;
  onError: IOnErrorAction;
  onWaiting: INormalEventAction;
  onSeeking: INormalEventAction;
  onSeeked: INormalEventAction;
  offCanPlay: INormalEventAction;
  offPlay: INormalEventAction;
  offPause: INormalEventAction;
  offStop: INormalEventAction;
  offEnded: INormalEventAction;
  offTimeUpdate: INormalEventAction;
  offError: INormalEventAction;
  offWaiting: INormalEventAction;
  offSeeking: INormalEventAction;
  offSeeked: INormalEventAction;
}

const SPECIALOPTION = ['mixWithOther', 'obeyMuteSwitch'];

function useAudio(
  initOption?: Partial<IOption>,
): [IAudioContext, IAudioSource, IAction] {
  const env = useEnv();
  const [audioSource, setAudioSource] = useState<IAudioSource>();
  const [audioContext, setAudioContext] = useState<IAudioContext>();

  useEffect(() => {
    createAudioContext();
    getAudioSourceAsync();
  }, []);

  const getAudioSourceAsync = useCallback<IGetAudioSourceAction>(() => {
    return new Promise((resolve, reject) => {
      if (env === ENV_TYPE.WEAPP) {
        try {
          getAvailableAudioSources({
            success: (res) => {
              resolve(res);
              setAudioSource(res.audioSources);
            },
            fail: reject,
          }).catch(reject);
        } catch (e) {
          reject(e);
        }
      }
    });
  }, [audioContext, env]);

  const createAudioContext = useCallback<ICreateAction>(
    (createOption = {}) => {
      if (audioContext) {
        return audioContext;
      }
      const payload =
        typeof createOption.useWebAudioImplement === 'undefined'
          ? {}
          : { useWebAudioImplement: createOption.useWebAudioImplement };
      const context = (
        createInnerAudioContext as unknown as ICreateInnerAudioContext
      )(payload);
      setAudioOption({ ...(initOption || {}), ...createOption }, context);
      setAudioContext(context);
      return context;
    },
    [audioContext],
  );

  const setAudioOption = useCallback<ISetOptionAction>(
    (option = {}, instance) => {
      return new Promise((resolve, reject) => {
        if (!option && (!audioContext || !instance)) {
          reject({ errMsg: 'please provide option' });
        } else {
          const context = instance || audioContext;
          try {
            const specialOptions: { [_: string]: any } = {};
            Object.entries(option).forEach(([key, value]) => {
              if (SPECIALOPTION.includes(key)) {
                specialOptions[key] = value;
              }
              // some option need setting root not in weapp
              if (!SPECIALOPTION.includes(key) || env === ENV_TYPE.WEAPP) {
                (<any>context)[key] = value;
              }
            });
            setInnerAudioOption({
              ...specialOptions,
              success: resolve,
              fail: reject,
            }).catch(reject);
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [audioContext, env],
  );

  const play = useCallback<IPlayAction>(
    (src) => {
      if (audioContext) {
        if (src) {
          setAudioOption({ src });
        }
        audioContext.play();
      }
    },
    [audioContext],
  );

  const stop = useCallback<INormalAction>(() => {
    if (audioContext) {
      audioContext.stop();
    }
  }, [audioContext]);

  const pause = useCallback<INormalAction>(() => {
    if (audioContext) {
      audioContext.pause();
    }
  }, [audioContext]);

  const seek = useCallback<ISeekAction>(
    (position) => {
      if (audioContext && typeof position === 'number') {
        audioContext.seek(position);
      }
    },
    [audioContext],
  );

  const destory = useCallback<INormalAction>(() => {
    if (audioContext && env !== ENV_TYPE.WEB) {
      audioContext.destroy();
      setAudioContext(undefined);
    }
  }, [audioContext, env]);

  const onCanPlay = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onCanplay(callback);
      }
    },
    [audioContext, env],
  );

  const offCanPlay = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offCanplay(callback);
      }
    },
    [audioContext, env],
  );

  const onPlay = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onPlay(callback);
      }
    },
    [audioContext, env],
  );

  const offPlay = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offPlay(callback);
      }
    },
    [audioContext, env],
  );

  const onStop = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onStop(callback);
      }
    },
    [audioContext, env],
  );

  const offStop = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offStop(callback);
      }
    },
    [audioContext, env],
  );

  const onPause = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onPause(callback);
      }
    },
    [audioContext, env],
  );

  const offPause = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offPause(callback);
      }
    },
    [audioContext, env],
  );

  const onEnded = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onEnded(callback);
      }
    },
    [audioContext, env],
  );

  const offEnded = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offEnded(callback);
      }
    },
    [audioContext, env],
  );

  const onTimeUpdate = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onTimeUpdate(callback);
      }
    },
    [audioContext, env],
  );

  const offTimeUpdate = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offTimeUpdate(callback);
      }
    },
    [audioContext, env],
  );

  const onError = useCallback<IOnErrorAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onError(callback);
      }
    },
    [audioContext, env],
  );

  const offError = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offError(callback);
      }
    },
    [audioContext, env],
  );

  const onWaiting = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onWaiting(callback);
      }
    },
    [audioContext, env],
  );

  const offWaiting = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offWaiting(callback);
      }
    },
    [audioContext, env],
  );

  const onSeeking = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onSeeking(callback);
      }
    },
    [audioContext, env],
  );

  const offSeeking = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offSeeking(callback);
      }
    },
    [audioContext, env],
  );

  const onSeeked = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.onSeeked(callback);
      }
    },
    [audioContext, env],
  );

  const offSeeked = useCallback<INormalEventAction>(
    (callback) => {
      if (audioContext && env !== ENV_TYPE.WEB && callback) {
        audioContext.offSeeked(callback);
      }
    },
    [audioContext, env],
  );

  return [
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
  ];
}

export default useAudio;
