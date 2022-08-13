import { logError } from '@taro-hooks/shared';
import type { GetStorageSpaceInfo } from './spaceInfo.type';
import { INIT } from './spaceInfo.type';

const getStorageSpaceInfo: GetStorageSpaceInfo = async () => {
  try {
    if (
      navigator &&
      'storage' in navigator &&
      'estimate' in navigator.storage
    ) {
      try {
        const { usage = 0, quota = 0 } = await navigator.storage.estimate();
        return {
          currentSize: usage,
          limitSize: quota,
        };
      } catch (e) {
        logError('estimate failed', e);
        return {
          currentSize: Storage.length,
          limitSize: 0,
        };
      }
    }
    return INIT;
  } catch (e) {
    return INIT;
  }
};

export default getStorageSpaceInfo;
