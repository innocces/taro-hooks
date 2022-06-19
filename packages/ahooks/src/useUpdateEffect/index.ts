import { useTaroEffect } from '@tarojs/taro';
import { createUpdateEffect } from '../createUpdateEffect';

export default createUpdateEffect(useTaroEffect);
