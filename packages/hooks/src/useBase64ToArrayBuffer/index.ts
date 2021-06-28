import { base64ToArrayBuffer } from '@tarojs/taro';
import { typeOf } from '../utils/tool';

function useBase64ToArrayBuffer(base64: string = ''): ArrayBuffer {
  if (!typeOf(base64, 'String')) {
    console.warn('please enter a string to arrayBuffer, default return null');
    return new ArrayBuffer(64);
  }
  return base64ToArrayBuffer(base64);
}

export default useBase64ToArrayBuffer;
