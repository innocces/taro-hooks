import { useEffect } from '@taro-hooks/core';
import { createUpdateEffect } from '../createUpdateEffect';

const useUpdateEffect: typeof useEffect = createUpdateEffect(useEffect);

export default useUpdateEffect;
