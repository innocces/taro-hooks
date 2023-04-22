import { setBackgroundColor, setBackgroundTextStyle } from '@tarojs/taro';
import { useEffect } from '@taro-hooks/core';
import usePromise from '../usePromise';

import type {
  ExcludeOption,
  PromiseOptionalAction,
  PromiseAction,
} from '../type';

export type ColorOption = ExcludeOption<Taro.setBackgroundColor.Option>;

export type SetColor = PromiseOptionalAction<ColorOption>;

export type StyleOption = ExcludeOption<Taro.setBackgroundTextStyle.Option>;

export type SetStyle = PromiseAction<StyleOption['textStyle']>;

export type Option = ColorOption & StyleOption;

function useBackground(option?: Option): [SetColor, SetStyle] {
  const setColor: SetColor = usePromise<ColorOption>(setBackgroundColor);

  const setStyleAsync = usePromise<StyleOption>(setBackgroundTextStyle);

  const setStyle: SetStyle = (textStyle) => {
    return setStyleAsync({ textStyle });
  };

  useEffect(() => {
    if (option) {
      const { textStyle, ...colorOption } = option;
      setColor(colorOption);
      textStyle && setStyle(textStyle);
    }
  }, [option]);

  return [setColor, setStyle];
}

export default useBackground;
