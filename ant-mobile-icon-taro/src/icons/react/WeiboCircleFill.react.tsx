// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const WeiboCircleFill: FC<ITaroIconProps> = ({
  size,
  style = {},
  color,
  usePX,
  ...props
}) => {

  const renderSize = useMemo(() => {
    return usePX ?  (size + 'px') : pxTransform(size!);
  }, [usePX, size, style])

  const background = useMemo(() => {
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3 69.5-69.6 150.6-101.4 181.1-70.8 13.5 13.5 14.8 36.8 6.1 64.6-4.5 14 13.1 6.3 13.1 6.3 56.2-23.6 105.2-25 123.1 0.7 9.6 13.7 8.6 32.8-0.2 55.1-4.1 10.2 1.3 11.8 9 14.1 31.7 9.8 66.9 33.6 66.9 75.5 0.2 69.5-99.7 156.9-249.8 156.9z m207.3-290.8c3.7-11.5 1.4-24.5-7.2-34.1-8.6-9.6-21.4-13.2-33.1-10.7-9.8 2.1-19.5-4.2-21.6-14-2.1-9.9 4.2-19.6 14-21.7 24.1-5.1 50.1 2.3 67.7 21.9 17.7 19.6 22.4 46.3 14.9 69.8-3.1 9.6-13.3 14.8-22.9 11.7-9.6-3.1-14.9-13.3-11.8-22.9z m106 34.3s0 0.1 0 0c-3.6 11.2-15.5 17.3-26.6 13.7-11.1-3.6-17.2-15.5-13.6-26.7 11-34.2 4-73.2-21.7-101.8-25.8-28.6-63.8-39.5-98.9-32.1-11.4 2.5-22.7-4.9-25.1-16.3-2.5-11.4 4.8-22.7 16.2-25.1 49.4-10.5 102.8 4.8 139.1 45.1 36.3 40.2 46.1 95.1 30.6 143.2z' fill='<%= color %>' /><path d='M446.4 485.6c-91.4 9-160.7 65.1-154.7 125.2 5.9 60.1 84.8 101.5 176.2 92.5 91.4-9.1 160.7-65.1 154.7-125.3-5.9-60.1-84.8-101.5-176.2-92.4z m80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1-43.9-14.2-62.5-57.7-43.3-96.8 18.9-38.4 68-60.1 111.5-48.8 45 11.7 68 54.2 49.6 95.5z' fill='<%= color %>' /><path d='M433.6 595.1c-14.2-5.9-32.4 0.2-41.2 13.9-8.8 13.8-4.7 30.2 9.3 36.6 14.3 6.5 33.2 0.3 42-13.8 8.8-14.3 4.2-30.6-10.1-36.7zM468.5 580.6c-5.4-2.2-12.2 0.5-15.4 5.8-3.1 5.4-1.4 11.5 4.1 13.8 5.5 2.3 12.6-0.3 15.8-5.8 3-5.6 1-11.8-4.5-13.8z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

WeiboCircleFill.displayName = 'WeiboCircleFill';

WeiboCircleFill.defaultProps = {
  size: 18,
  style: {}
}

export default WeiboCircleFill;