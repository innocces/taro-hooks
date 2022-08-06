import { arrayBufferToBase64, base64ToArrayBuffer } from '@tarojs/taro';

type ToBase64 = typeof arrayBufferToBase64;

type ToArrayBuffer = typeof base64ToArrayBuffer;

function useArrayBuffer(): {
  toBase64: ToBase64;
  toArrayBuffer: ToArrayBuffer;
} {
  return {
    toBase64: arrayBufferToBase64,
    toArrayBuffer: base64ToArrayBuffer,
  };
}

export default useArrayBuffer;
