import { useTaroState, useTaroEffect } from '@tarojs/taro';

function useVisible(): boolean {
  const [visible, changeVisible] = useTaroState<boolean>(true);
  const listenVisible = () => {
    const visibleState = document.visibilityState;
    changeVisible(visibleState === 'visible');
  };

  useTaroEffect(() => {
    window.addEventListener('visibilitychange', listenVisible, false);
    window.addEventListener('focus', listenVisible, false);
    window.addEventListener('blur', listenVisible, false);

    return () => {
      window.removeEventListener('visibilitychange', listenVisible, false);
      window.removeEventListener('focus', listenVisible, false);
      window.removeEventListener('blur', listenVisible, false);
    };
  }, []);

  return visible;
}

export default useVisible;
