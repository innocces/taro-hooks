import { getStorageInfo } from '@tarojs/taro';
import type {
  GetStorageSpaceInfo,
  SuccessCallbackResult,
} from './spaceInfo.type';
import { INIT } from './spaceInfo.type';

const getStorageSpaceInfo: GetStorageSpaceInfo = async () => {
  try {
    const { currentSize, limitSize } =
      (await getStorageInfo()) as unknown as SuccessCallbackResult;
    return {
      currentSize,
      limitSize,
    };
  } catch (e) {
    return INIT;
  }
};

export default getStorageSpaceInfo;
