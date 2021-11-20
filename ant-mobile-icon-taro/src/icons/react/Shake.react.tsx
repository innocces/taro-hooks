// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Shake: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M372 666m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z' fill='<%= color %>' /><path d='M940.7 356.4L667.6 83.2C655.2 70.9 638.7 64 621.1 64s-34.1 6.8-46.5 19.2L83.3 574.5c-25.7 25.7-25.7 67.4 0 93.1l273.2 273.2c12.3 12.3 28.9 19.2 46.5 19.2s34.1-6.8 46.5-19.2l491.3-491.3c25.6-25.7 25.6-67.5-0.1-93.1zM403 880.1L143.9 621l477.2-477.2 259 259.2L403 880.1zM152.8 373.7c3.1 3.1 8.1 3.1 11.2 0L373.7 164c3.1-3.1 3.1-8.1 0-11.2l-38.4-38.4c-3.1-3.1-8.1-3.1-11.2 0L114.3 323.9c-3.1 3.1-3.1 8.1 0 11.2l38.5 38.6zM871.4 650.3c-3.1-3.1-8.1-3.1-11.2 0L650.3 860.1c-3.1 3.1-3.1 8.1 0 11.2l38.4 38.4c3.1 3.1 8.1 3.1 11.2 0L909.7 700c3.1-3.1 3.1-8.1 0-11.2l-38.3-38.5z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

Shake.displayName = 'Shake';

Shake.defaultProps = {
  size: 18,
  style: {}
}

export default Shake;