import { getNetworkType } from '@tarojs/taro';

export default function isOnline(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    getNetworkType()
      .then((result) => resolve(result.networkType !== 'none'))
      .catch(reject);
  });
}
