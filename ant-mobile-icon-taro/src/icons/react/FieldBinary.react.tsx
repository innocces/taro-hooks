// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const FieldBinary: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M600 395.4h91V649h79V267c0-4.4-3.6-8-8-8h-48.2c-3.7 0-7 2.6-7.7 6.3-2.6 12.1-6.9 22.3-12.9 30.9-7.2 10.1-15.9 18.2-26.3 24.4-10.3 6.2-22 10.5-35 12.9-10.4 1.9-21 3-32 3.1-4.4 0.1-7.9 3.6-7.9 8v42.8c0 4.4 3.6 8 8 8zM871 702H567c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM443.9 312.7c-16.1-19-34.4-32.4-55.2-40.4-21.3-8.2-44.1-12.3-68.4-12.3-23.9 0-46.4 4.1-67.7 12.3-20.8 8-39 21.4-54.8 40.3-15.9 19.1-28.7 44.7-38.3 77-9.6 32.5-14.5 73-14.5 121.5 0 49.9 4.9 91.4 14.5 124.4 9.6 32.8 22.4 58.7 38.3 77.7 15.8 18.9 34 32.3 54.8 40.3 21.3 8.2 43.8 12.3 67.7 12.3 24.4 0 47.2-4.1 68.4-12.3 20.8-8 39.2-21.4 55.2-40.4 16.1-19 29-44.9 38.6-77.7 9.6-33 14.5-74.5 14.5-124.4 0-48.4-4.9-88.9-14.5-121.5-9.5-32.1-22.4-57.7-38.6-76.8z m-29.5 251.7c-1 21.4-4.2 42-9.5 61.9-5.5 20.7-14.5 38.5-27 53.4-13.6 16.3-33.2 24.3-57.6 24.3-24 0-43.2-8.1-56.7-24.4-12.2-14.8-21.1-32.6-26.6-53.3-5.3-19.9-8.5-40.6-9.5-61.9-1-20.8-1.5-38.5-1.5-53.2 0-8.8 0.1-19.4 0.4-31.8 0.2-12.7 1.1-25.8 2.6-39.2 1.5-13.6 4-27.1 7.6-40.5 3.7-13.8 8.8-26.3 15.4-37.4 6.9-11.6 15.8-21.1 26.7-28.3 11.4-7.6 25.3-11.3 41.5-11.3 16.1 0 30.1 3.7 41.7 11.2 11.1 7.2 20.3 16.6 27.4 28.2 6.9 11.2 12.1 23.8 15.6 37.7 3.3 13.2 5.8 26.6 7.5 40.1 1.8 13.5 2.8 26.6 3 39.4 0.2 12.4 0.4 23 0.4 31.8 0.1 14.8-0.4 32.5-1.4 53.3z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

FieldBinary.displayName = 'FieldBinary';

FieldBinary.defaultProps = {
  size: 18,
  style: {}
}

export default FieldBinary;