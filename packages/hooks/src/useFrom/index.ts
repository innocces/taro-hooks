import { useEffect, useState } from 'react';
import usePage from '../usePage';
import type { TPartialRouteInfo } from '../type';

function useFrom(): TPartialRouteInfo<{}> {
  const [stackLength, { pageInstance, pageStack }] = usePage();
  const [from, setFrom] = useState<TPartialRouteInfo<{}>>({});

  useEffect(() => {
    let route = {};
    if (stackLength > 1) {
      route = pageStack[stackLength - 2];
    }
    setFrom(route);
  }, [stackLength, pageStack]);

  return from;
}

export default useFrom;
