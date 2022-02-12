import Taro from '@tarojs/taro';

function usePromise(
  options: TaroGeneral.IAnyObject,
  Instance: typeof Taro,
): Promise<TaroGeneral.CallbackResult> {
  return new Promise((resolve, reject) => {
    try {
      if (typeof Instance === 'string' && Taro[Instance]) {
        const methodInstance: (
          options: TaroGeneral.IAnyObject,
        ) => Promise<any> = Taro[Instance];
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
