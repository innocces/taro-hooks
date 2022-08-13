import type { ExcludeOption, PromiseWithoutOptionAction } from '../../type';

export type SuccessCallbackResult = Taro.getStorageInfo.SuccessCallbackOption;

export type SpaceInfo = Omit<ExcludeOption<SuccessCallbackResult>, 'keys'>;

export type GetStorageSpaceInfo = PromiseWithoutOptionAction<SpaceInfo>;

export const INIT: SpaceInfo = {
  currentSize: 0,
  limitSize: 0,
};
