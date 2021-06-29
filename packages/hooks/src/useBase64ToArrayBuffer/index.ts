import { base64ToArrayBuffer } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import { typeOf } from '../utils/tool';

const DEFAULT = new Uint8Array([]);

function useBase64ToArrayBuffer(
  base64: string = '',
): [ArrayBuffer, (base64: string) => void] {
  const [buffer, setBuffer] = useState<ArrayBuffer>(DEFAULT);

  const setBase64 = useCallback((base64: string) => {
    if (!typeOf(base64, 'String')) {
      console.warn('please enter a string to arrayBuffer, default return null');
    } else {
      setBuffer(base64ToArrayBuffer(base64));
    }
  }, []);

  useEffect(() => {
    setBase64(base64);
  }, []);

  return [buffer, setBase64];
}

export default useBase64ToArrayBuffer;
