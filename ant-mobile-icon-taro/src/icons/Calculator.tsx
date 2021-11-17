// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../util';
import type { ITaroIconProps } from '../type';
import '../style/icon.less';

const Calculator: FC<ITaroIconProps> = ({
  size,
  style,
  color,
  usePX,
  ...props
}) => {
  const renderSize = useMemo(() => {
    return usePX
      ? pxTransform(size!).replace(/rpx|rem/gi, 'px')
      : pxTransform(size!);
  }, [usePX, size]);

  const background = useMemo(() => {
    const base64SVG = template(
      "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M251.2 387H320v68.8c0 1.8 1.8 3.2 4 3.2h48c2.2 0 4-1.4 4-3.3V387h68.8c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H376v-68.8c0-1.8-1.8-3.2-4-3.2h-48c-2.2 0-4 1.4-4 3.2V331h-68.8c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zM579.2 387h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zM579.2 652h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zM579.2 756h193.6c1.8 0 3.2-1.8 3.2-4v-48c0-2.2-1.4-4-3.3-4H579.2c-1.8 0-3.2 1.8-3.2 4v48c0 2.2 1.4 4 3.2 4zM383.5 675l61.2-74.9c4.3-5.2 0.7-13.1-5.9-13.1H388c-2.3 0-4.5 1-5.9 2.9l-34 41.6-34-41.6c-1.5-1.8-3.7-2.9-5.9-2.9h-50.9c-6.6 0-10.2 7.9-5.9 13.1l61.2 74.9-62.7 76.8c-4.4 5.2-0.8 13.1 5.8 13.1h50.8c2.3 0 4.5-1 5.9-2.9l35.5-43.5 35.5 43.5c1.5 1.8 3.7 2.9 5.9 2.9h50.8c6.6 0 10.2-7.9 5.9-13.1L383.5 675z' fill='<%= color %>' /><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-36 732H180V180h664v664z' fill='<%= color %>' /></svg>",
      { size: renderSize, color: hex2rgb(color || '') },
    );
    const escape = base64SVG.replace(/<|>/g, (str: string) =>
      encodeURIComponent(str),
    );
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    <View
      className="adm-icon"
      style={{ ...style, background, width: renderSize, height: renderSize }}
      {...props}
    ></View>
  );
};

Calculator.displayName = 'Calculator';

Calculator.defaultProps = {
  size: 18,
  style: {},
};

export default Calculator;
