import Taro, { General } from '@tarojs/taro';

function usePromise(
  options: General.IAnyObject,
  Instance: typeof Taro,
): Promise<General.CallbackResult> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof Instance === 'string' && Taro[Instance]) {
        const methodInstance: (options: General.IAnyObject) => Promise<any> =
          Taro[Instance];
        methodInstance({
          ...(options || {}),
          success: resolve,
          fail: reject,
          complete: console.log,
        }).catch(reject);
      }
      console.warn('please input a valid method name');
    } catch (e) {
      reject(e);
    }
  });
}

export default usePromise;
