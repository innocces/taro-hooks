
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const PhoneFill: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M885.6 230.2L779.1 123.8c-15.3-15.3-35.8-23.8-57.3-23.8-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4c-15.3 15.3-23.8 35.8-23.8 57.3 0 21.7 8.5 42.1 23.8 57.4l83.8 83.8c-19.7 43.4-46.8 82.4-80.5 116.1-33.6 33.8-72.7 60.9-116.1 80.8L353.2 550c-15.3-15.3-35.8-23.8-57.3-23.8-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5c-15.3 15.3-23.8 35.8-23.8 57.4 0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-0.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></Text>
  )
}

PhoneFill.displayName = 'PhoneFill';

PhoneFill.defaultProps = {
  size: 18,
  style: {}
}

export default PhoneFill;
