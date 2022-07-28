import { useTaroEffect } from '@tarojs/taro';
import { escapeState } from '@taro-hooks/shared';
import { useVisible } from 'taro-hooks';

const listeners: any[] = [];

function subscribeReVisible(listener: () => void) {
  listeners.push(listener);

  const visible = useVisible();

  useTaroEffect(() => {
    if (escapeState(visible)) {
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        listener();
      }
    }
  }, [visible]);

  return function unsubscribe() {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

export default subscribeReVisible;
