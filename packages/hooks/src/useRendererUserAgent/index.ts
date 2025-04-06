/**
 * api: getRendererUserAgent
 */
import Taro from '@tarojs/taro';
import { createUseInfoHook } from '../createUseInfoHook';

const useRendererUserAgent = createUseInfoHook<'getRendererUserAgent'>(
  Taro.getRendererUserAgent,
  {},
);

export default useRendererUserAgent;
