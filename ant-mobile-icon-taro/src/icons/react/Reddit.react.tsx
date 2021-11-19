
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Reddit: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M344 568m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z' fill='<%= color %>' /><path d='M626.7 687.7c-23.1 18.2-68.9 37.8-114.7 37.8s-91.6-19.6-114.7-37.8c-14.4-11.3-35.3-8.9-46.7 5.5s-8.9 35.3 5.5 46.7C396.3 771.6 457.5 792 512 792s115.7-20.4 155.9-52.1c14.4-11.4 16.9-32.3 5.5-46.7-11.3-14.4-32.3-16.9-46.7-5.5z' fill='<%= color %>' /><path d='M960 456c0-61.9-50.1-112-112-112-42.1 0-78.7 23.2-97.9 57.6-57.6-31.5-127.7-51.8-204.1-56.5L612.9 195l127.9 36.9c11.5 32.6 42.6 56.1 79.2 56.1 46.4 0 84-37.6 84-84s-37.6-84-84-84c-32 0-59.8 17.9-74 44.2L603.5 123c-16-4.6-32.8 3.2-39.6 18.4l-90.8 203.9c-74.5 5.2-142.9 25.4-199.2 56.2-19.1-34.3-55.8-57.5-97.9-57.5-61.9 0-112 50.1-112 112 0 45.8 27.5 85.1 66.8 102.5-7.1 21-10.8 43-10.8 65.5 0 154.6 175.5 280 392 280s392-125.4 392-280c0-22.6-3.8-44.5-10.8-65.5C932.5 541.1 960 501.8 960 456zM820 172.5c17.4 0 31.5 14.1 31.5 31.5s-14.1 31.5-31.5 31.5-31.5-14.1-31.5-31.5 14.1-31.5 31.5-31.5zM120 456c0-30.9 25.1-56 56-56 22.3 0 41.6 13.1 50.6 32.1-29.3 22.2-53.5 47.8-71.5 75.9-20.5-8.3-35.1-28.5-35.1-52z m392 381.5c-179.8 0-325.5-95.6-325.5-213.5S332.2 410.5 512 410.5 837.5 506.1 837.5 624 691.8 837.5 512 837.5zM868.8 508c-17.9-28.1-42.2-53.7-71.5-75.9 9-18.9 28.3-32.1 50.6-32.1 30.9 0 56 25.1 56 56 0.1 23.5-14.5 43.7-35.1 52z' fill='<%= color %>' /><path d='M680 568m-56 0a56 56 0 1 0 112 0 56 56 0 1 0-112 0Z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <View className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></View>
  )
}

Reddit.displayName = 'Reddit';

Reddit.defaultProps = {
  size: 18,
  style: {}
}

export default Reddit;
