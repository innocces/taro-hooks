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
export type Result = [unknown, clipboardAction];

function useClipboardData(): Result {
  const [clipboardData, changeClipborardData] = useState<unknown>('');

  const setClipboard = useCallback<setClipboard>((text: unknown) => {
    if (!text) {
      console.warn('please enter a text');
      return Promise.reject(text);
    }
    return new Promise((resolve, reject) => {
      try {
        // save data as object with struct { clip: text }
        const data = JSON.stringify({ clip: text });
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
            const { clip = '' } = JSON.parse(res.data);
            changeClipborardData(clip);
            resolve(clip);
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
