import { useDidShow } from '@tarojs/taro';

const listeners: any[] = [];

function subscribeReVisible(listener: () => void) {
  listeners.push(listener);

  useDidShow(() => {
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  });

  return function unsubscribe() {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

export default subscribeReVisible;
