import { getClipboardData, setClipboardData } from '@tarojs/taro';
import { useCallback, useState } from 'react';

export type setClipboard = (text: any) => Promise<any>;
export type getClipboard = () => Promise<any>;
export interface clipboardAction {
  set: setClipboard;
  get: getClipboard;
}
export type SuccessResult = {
  errMsg: string;
  data: string | { data: string; errMsg: string };
};
export type Result = [string, clipboardAction];

function useClipboardData(): Result {
  const [clipboardData, changeClipborardData] = useState<string>('');

  const setClipboard = useCallback<setClipboard>((text: any) => {
    if (!text) {
      console.warn('please enter a text');
      return Promise.reject(text);
    }
    return new Promise((resolve, reject) => {
      try {
        const data = JSON.stringify(text);
        setClipboardData({
          data,
          success: (res) => {
            changeClipborardData(text);
            resolve(res);
          },
          fail: reject,
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const getClipboard = useCallback<getClipboard>(() => {
    return new Promise((resolve, reject) => {
      try {
        getClipboardData({
          success: (res) => {
            const data = JSON.parse(
              typeof res.data === 'string'
                ? res.data
                : (res.data as { data: string }).data,
            );
            changeClipborardData(data);
            resolve(data);
          },
          fail: reject,
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  return [clipboardData, { set: setClipboard, get: getClipboard }];
}

export default useClipboardData;
