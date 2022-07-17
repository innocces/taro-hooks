import { useDidHide, useDidShow, useTaroState } from '@tarojs/taro';

function useVisible(): boolean {
  const [visible, changeVisible] = useTaroState<boolean>(true);

  useDidShow(() => {
    changeVisible(true);
  });

  useDidHide(() => {
    changeVisible(false);
  });

  return visible;
}

export default useVisible;
