// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Earth: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M854.4 800.9c0.2-0.3 0.5-0.6 0.7-0.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-0.2-0.3-0.5-0.5-0.7-0.8-1.1-1.3-2.1-2.5-3.2-3.7-0.4-0.5-0.8-0.9-1.2-1.4-1.4-1.6-2.7-3.1-4.1-4.7l-0.1-0.1c-1.5-1.7-3.1-3.4-4.6-5.1l-0.1-0.1c-3.2-3.4-6.4-6.8-9.7-10.1l-0.1-0.1-4.8-4.8-0.3-0.3c-1.5-1.5-3-2.9-4.5-4.3-0.5-0.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-0.3-0.3-0.7-0.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-0.3 0.3-0.7 0.6-1 1-1 0.9-2 1.9-3 2.9-0.5 0.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-0.3 0.3-4.8 4.8-0.1 0.1c-3.3 3.3-6.5 6.7-9.7 10.1l-0.1 0.1c-1.6 1.7-3.1 3.4-4.6 5.1l-0.1 0.1c-1.4 1.5-2.8 3.1-4.1 4.7-0.4 0.5-0.8 0.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-0.2 0.3-0.5 0.5-0.7 0.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c0.2 0.3 0.5 0.6 0.7 0.9 1 1.2 2.1 2.5 3.1 3.7 0.4 0.5 0.8 0.9 1.2 1.4 1.4 1.6 2.7 3.1 4.1 4.7 0 0.1 0.1 0.1 0.1 0.2 1.5 1.7 3 3.4 4.6 5l0.1 0.1c3.2 3.4 6.4 6.8 9.6 10.1l0.1 0.1c1.6 1.6 3.1 3.2 4.7 4.7l0.3 0.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2c3.4-3.1 6.7-6.3 10-9.6l0.3-0.3c1.6-1.6 3.2-3.1 4.7-4.7l0.1-0.1c3.3-3.3 6.5-6.7 9.6-10.1l0.1-0.1c1.5-1.7 3.1-3.3 4.6-5 0-0.1 0.1-0.1 0.1-0.2 1.4-1.5 2.8-3.1 4.1-4.7 0.4-0.5 0.8-0.9 1.2-1.4 1.2-1.3 2.3-2.5 3.3-3.7z m4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2-24.9-21.5-52.2-40.3-81.5-55.9 11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9 22.2 27.4 40.4 57.6 54.2 90.2C874.4 403.4 884 443.1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2-18.5 15.8-38.4 29.7-59.4 41.8-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4z m-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697c39.9 2.8 78.6 11.6 115.7 26.2-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1z m59-633.1c11 20.6 20.7 43.3 29 67.8-37.1 14.6-75.8 23.4-115.7 26.2V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-0.3 1.2c-41.1-15.6-85.1-25.3-130.9-28.1z m0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l0.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540z m-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-0.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484z m-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l0.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1z m0-370c-39.9-2.8-78.6-11.6-115.7-26.2 8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6-29.3 15.6-56.6 34.4-81.5 55.9-22.2-27.4-40.4-57.6-54.2-90.2C149.6 620.6 140 580.9 137 540z m228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4z m292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8-31.8 29.2-67.9 52.4-107.6 69.2z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

Earth.displayName = 'Earth';

Earth.defaultProps = {
  size: 18,
  style: {}
}

export default Earth;