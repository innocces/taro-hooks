
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Arrawsalt: FC<ITaroIconProps> = ({
  size,
  style = {},
  color,
  usePX,
  ...props
}) => {

  const renderSize = useMemo(() => {
    return usePX ? pxTransform(size!).replace(/rpx|rem/ig, 'px') : pxTransform(size!);
  }, [usePX, size, style])

  const background = useMemo(() => {
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M855 160.1l-189.2 23.5c-6.6 0.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5c-3.1 3.1-3.1 8.2 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7c4.7 4.7 12.7 1.9 13.5-4.7L863.9 169c0.7-5.2-3.7-9.6-8.9-8.9zM416.6 562.3c-3.1-3.1-8.2-3.1-11.3 0L251.8 715.9l-54.7-54.7c-4.7-4.7-12.7-1.9-13.5 4.7L160.1 855c-0.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-0.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    <View className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></View>
  )
}

Arrawsalt.displayName = 'Arrawsalt';

Arrawsalt.defaultProps = {
  size: 18,
  style: {}
}

export default Arrawsalt;
