// from swr
import { useCallback, useEffect, useState } from 'react';
import { useVisible } from '../../';

function usePageVisible() {
  const [listeners, setListeners] = useState<any[]>([]);
  const visible = useVisible();

  const subscribe = useCallback(
    (listener: () => void) => {
      setListeners([...listeners, listener]);
      return function unsubscribe() {
        const prevListeners = [...listeners];
        const index = prevListeners.indexOf(listener);
        prevListeners.splice(index, 1);
        setListeners([...prevListeners]);
      };
    },
    [listeners, setListeners],
  );

  const revalidate = useCallback(() => {
    if (!visible) return;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }, [visible, listeners]);

  useEffect(() => {
    revalidate();
  }, [visible]);

  return subscribe;
}

export default usePageVisible;
