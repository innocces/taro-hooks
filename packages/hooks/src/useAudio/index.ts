import Taro, {
  createInnerAudioContext,
  getAvailableAudioSources,
} from '@tarojs/taro';
import { useRef, useEffect } from '@taro-hooks/core';
import { setInnerAudioOption } from './utils';
import usePromise from '../usePromise';
import type { InnerAudioContext } from '@tarojs/taro';
import type {
  ExcludeOption,
  PromiseOptionalAction,
  WithUndefind,
} from '../type';
import type { Option as InnerOption } from './utils';

export type ContextField = {
  autoplay: boolean;
  loop: boolean;
  src: string;
  startTime: number;
  volume: number;
  playbackRate: number;
};

export type Option = ExcludeOption<Taro.setInnerAudioOption.Option> &
  ContextField;

export type SetOption = PromiseOptionalAction<InnerOption>;

export type Sources =
  Taro.getAvailableAudioSources.SuccessCallbackResult['audioSources'];

export type Play = (src?: string) => void;

export const INITOPTION: Partial<Option> = {
  autoplay: false,
  loop: false,
  obeyMuteSwitch: true,
  playbackRate: 1,
  volume: 1,
  startTime: 0,
};

function useAudio(initOption = INITOPTION): [
  InnerAudioContext,
  {
    sources: WithUndefind<Sources>;
    setOption: SetOption;
    play;
  },
] {
  const audioContext = useRef<InnerAudioContext>(createInnerAudioContext());
  const sources = useRef<Sources>();

  const setOption: SetOption = usePromise<Option>(setInnerAudioOption);
  const getSourceAsync = usePromise<
    {},
    Taro.getAvailableAudioSources.SuccessCallbackResult
  >(getAvailableAudioSources);

  const getSources = () => {
    return getSourceAsync().then((res) => {
      sources.current = res.audioSources;
      return res;
    });
  };

  useEffect(() => {
    setOption({ ...initOption, context: audioContext.current });
    getSources();
  }, [initOption]);

  const play: Play = (src) => {
    if (audioContext.current) {
      if (src) {
        setOption({ src });
      }
      audioContext.current.play();
    }
  };

  return [
    audioContext.current,
    {
      sources: sources.current,
      setOption,
      play,
    },
  ];
}

export default useAudio;
