import Taro, {
  useRouter as useTaroRouter,
  switchTab as switchTaroTab,
  reLaunch,
  redirectTo,
  navigateTo,
  navigateBack,
  navigateToMiniProgram,
  navigateBackMiniProgram,
  openEmbeddedMiniProgram,
  exitMiniProgram,
  useTaroRef,
} from '@tarojs/taro';

import type { RouterInfo } from '@tarojs/taro';

import useFrom from '../useFrom';
import usePromise from '../usePromise';

import { stringfiyUrl } from '../utils/tool';

import type {
  ExcludeOption,
  PromiseAction,
  PromiseParamsAction,
  RecordData,
  PromiseWithoutOptionAction,
} from '../type';

export type RouteOption<R = string | RecordData> = (
  url: string,
  payload?: R,
  // open mini
  mini?: boolean,
  // open half screen
  embedded?: boolean,
) => void;

export type RouteBaseOption = { url: string };

export type RouteOptionWithParams<R, S = undefined> = R & { params: S };

export type SwitchTab = PromiseAction<string>;

export type RouteBackOption = (
  payload?: number | Taro.navigateBackMiniProgram.Option['extraData'],
  // open mini
  mini?: boolean,
) => void;

export type Back = PromiseParamsAction<RouteBackOption>;

export type Exit = PromiseWithoutOptionAction;

export type RouteNavigate<R> = PromiseParamsAction<RouteOption<R>>;

export type Route<R extends Partial<RecordData>> = RouterInfo<R> & {
  from: ReturnType<typeof useFrom>;
};

function useRouter<R extends RecordData>(): [
  Route<R>,
  {
    navigate: RouteNavigate<R>;
    switchTab: SwitchTab;
    back: Back;
    redirect: RouteNavigate<R>;
    relaunch: RouteNavigate<R>;
    exit: Exit;
  },
] {
  const router = useTaroRef<Omit<Route<R>, 'from'>>(useTaroRouter());
  const from = useFrom();

  const navigateToAsync =
    usePromise<ExcludeOption<Taro.navigateTo.Option>>(navigateTo);
  const navigateToMiniProgramAsync = usePromise<
    ExcludeOption<Taro.navigateToMiniProgram.Option>
  >(navigateToMiniProgram);
  const openEmbeddedMiniProgramAsync =
    usePromise<Taro.openEmbeddedMiniProgram.Option>(openEmbeddedMiniProgram);
  const switchTabAsync = usePromise<RouteBaseOption>(switchTaroTab);
  const relaunchAsync = usePromise<RouteBaseOption>(reLaunch);
  const redirectToAsync = usePromise<RouteBaseOption>(redirectTo);
  const navigateBackAsync =
    usePromise<ExcludeOption<Taro.navigateBack.Option>>(navigateBack);
  const navigateBackMiniProgramAsync = usePromise<
    ExcludeOption<Taro.navigateBackMiniProgram.Option>
  >(navigateBackMiniProgram);
  const exitMiniProgramAsync = usePromise<{}>(exitMiniProgram);

  const navigate: RouteNavigate<R> = (url, payload, mini, embedded) => {
    if (mini) {
      const { params = {}, ...extendsPayload } =
        payload as unknown as RouteOptionWithParams<
          Omit<ExcludeOption<Taro.navigateToMiniProgram.Option>, 'path'>
        >;
      const navigateURI = stringfiyUrl<typeof params>(url, params);
      const options = { path: navigateURI, ...extendsPayload };
      return embedded
        ? openEmbeddedMiniProgramAsync(options)
        : navigateToMiniProgramAsync(options);
    }
    const navigateURI = stringfiyUrl<R>(url, payload);
    return navigateToAsync({ url: navigateURI });
  };

  const switchTab: SwitchTab = (url) => {
    return switchTabAsync({ url });
  };

  const relaunch: RouteNavigate<R> = (url, payload) => {
    const navigateURI = stringfiyUrl<R>(url, payload);
    return relaunchAsync({ url: navigateURI });
  };

  const redirect: RouteNavigate<R> = (url, payload) => {
    const navigateURI = stringfiyUrl<R>(url, payload);
    return redirectToAsync({ url: navigateURI });
  };

  const back: Back = (payload, mini) => {
    if (!mini) {
      return navigateBackAsync({ delta: (payload || 1) as number });
    }

    return navigateBackMiniProgramAsync({
      extraData: (payload || {}) as RecordData,
    });
  };

  const exit: Exit = exitMiniProgramAsync;

  return [
    { ...router.current, from },
    {
      navigate,
      switchTab,
      relaunch,
      redirect,
      back,
      exit,
    },
  ];
}

export default useRouter;
