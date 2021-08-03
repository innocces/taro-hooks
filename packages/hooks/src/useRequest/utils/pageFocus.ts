// from swr
import { useCallback, useEffect, useState } from 'react';
import useVisible from '../../useVisible';
import useOnline from '../../useOnline';

function usePageFocus() {
  const [listeners, setListeners] = useState<any[]>([]);
  const visible = useVisible();
  const online = useOnline();

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
    if (!visible || !online) return;
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }, [visible, online, listeners]);

  useEffect(() => {
    revalidate();
  }, [visible, online]);

  return subscribe;
}

export default usePageFocus;
