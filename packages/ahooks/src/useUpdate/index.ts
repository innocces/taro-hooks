import { useTaroCallback, useTaroState } from '@tarojs/taro';

const useUpdate = () => {
  const [, setState] = useTaroState({});

  return useTaroCallback(() => setState({}), []);
};

export default useUpdate;
