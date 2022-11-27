import { useTaroEffect } from '@tarojs/taro';
import { createUpdateEffect } from '../createUpdateEffect';

const useUpdateEffect: typeof useTaroEffect = createUpdateEffect(useTaroEffect);

export default useUpdateEffect;
