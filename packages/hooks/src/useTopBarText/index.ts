import { setTopBarText } from '@tarojs/taro';
import usePromise from '../usePromise';

import type { PromiseAction, ExcludeOption } from '../type';

type SetTopBarTextOption = ExcludeOption<Taro.setTopBarText.Option>;

export type Set = PromiseAction<SetTopBarTextOption['text']>;

function useTopBarText(text?: string): Set {
  const setTopBarTextAsync = usePromise<SetTopBarTextOption>(setTopBarText);

  const set: Set = (topBarText) => {
    return setTopBarTextAsync({ text: topBarText });
  };

  if (text) {
    set(text);
  }

  return set;
}

export default useTopBarText;
