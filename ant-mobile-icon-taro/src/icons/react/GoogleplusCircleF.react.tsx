
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const GoogleplusCircleF: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m36.5 558.8c-43.9 61.8-132.1 79.8-200.9 53.3-69-26.3-118-99.2-112.1-173.5 1.5-90.9 85.2-170.6 176.1-167.5 43.6-2 84.6 16.9 118 43.6-14.3 16.2-29 31.8-44.8 46.3-40.1-27.7-97.2-35.6-137.3-3.6-57.4 39.7-60 133.4-4.8 176.1 53.7 48.7 155.2 24.5 170.1-50.1-33.6-0.5-67.4 0-101-1.1-0.1-20.1-0.2-40.1-0.1-60.2 56.2-0.2 112.5-0.3 168.8 0.2 3.3 47.3-3 97.5-32 136.5zM791 536.5c-16.8 0.2-33.6 0.3-50.4 0.4-0.2 16.8-0.3 33.6-0.3 50.4H690c-0.2-16.8-0.2-33.5-0.3-50.3-16.8-0.2-33.6-0.3-50.4-0.5v-50.1c16.8-0.2 33.6-0.3 50.4-0.3 0.1-16.8 0.3-33.6 0.4-50.4h50.2l0.3 50.4c16.8 0.2 33.6 0.2 50.4 0.3v50.1z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <View className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></View>
  )
}

GoogleplusCircleF.displayName = 'GoogleplusCircleF';

GoogleplusCircleF.defaultProps = {
  size: 18,
  style: {}
}

export default GoogleplusCircleF;
