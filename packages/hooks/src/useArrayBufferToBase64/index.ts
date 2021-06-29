import { arrayBufferToBase64 } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import { typeOf } from '../utils/tool';

export enum arrayBufferType {
  ARRAYBUFFER = 'ArrayBuffer',
  UNIT8ARRAY = 'Uint8Array',
  UNIT16ARRAY = 'Uint16Array',
  UNIT32ARRAY = 'Uint32Array',
  FLOAT64ARRAY = 'Float64Array',
}

function useArrayBufferToBase64(
  arrayBuffer: ArrayBuffer,
): [string, (arrayBuffer: ArrayBuffer) => void] {
  const [base64, setBase64] = useState<string>('');

  const setArrayBuffer = useCallback((arrayBuffer: ArrayBuffer) => {
    if (!typeOf(arrayBuffer, Object.values(arrayBufferType))) {
      console.warn('please enter a arrayBuffer to string, default return ""');
    } else {
      setBase64(arrayBufferToBase64(arrayBuffer));
    }
  }, []);

  useEffect(() => {
    setArrayBuffer(arrayBuffer);
  }, [arrayBuffer]);

  return [base64, setArrayBuffer];
}

export default useArrayBufferToBase64;
