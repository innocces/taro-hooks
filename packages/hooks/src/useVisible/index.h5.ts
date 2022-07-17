import { useTaroState, useTaroEffect } from '@tarojs/taro';

function useVisible(): boolean {
  const [visible, changeVisible] = useTaroState<boolean>(true);
  const listenVisible = () => {
    const visibleState = document.visibilityState;
    changeVisible(visibleState === 'visible');
  };

  useTaroEffect(() => {
    document.addEventListener('visibilitychange', listenVisible);
    document.addEventListener('focus', listenVisible);

    return () => {
      document.removeEventListener('visibilitychange', listenVisible);
      document.removeEventListener('focus', listenVisible);
    };
  }, []);

  return visible;
}

export default useVisible;
