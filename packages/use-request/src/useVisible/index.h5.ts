import { useDidHide } from '@tarojs/taro';
import { useEffect, useState } from '@taro-hooks/core';

function useVisible(): boolean {
  const [visible, changeVisible] = useState<boolean>(true);
  const listenVisible = () => {
    const visibleState = document.visibilityState;
    changeVisible(visibleState === 'visible');
  };

  useEffect(() => {
    window.addEventListener('visibilitychange', listenVisible, false);
    window.addEventListener('focus', listenVisible, false);
    window.addEventListener('blur', listenVisible, false);

    return () => {
      window.removeEventListener('visibilitychange', listenVisible, false);
      window.removeEventListener('focus', listenVisible, false);
      window.removeEventListener('blur', listenVisible, false);
    };
  }, []);

  // unmount change false
  useDidHide(() => {
    changeVisible(false);
  });

  return visible;
}

export default useVisible;
