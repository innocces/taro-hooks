// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const HTMLFill: FC<ITaroIconProps> = ({
  size,
  style = {},
  color,
  usePX,
  ...props
}) => {

  const renderSize = useMemo(() => {
    return typeof size === 'number' ? usePX ?  (size + 'px') : pxTransform(size!) : size;
  }, [usePX, size, style])

  const background = useMemo(() => {
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M145.2 96l66 746.6L512 928l299.6-85.4L878.9 96H145.2z m595 177.1l-4.8 47.2-1.7 19.5H382.3l8.2 94.2h335.1l-3.3 24.3-21.2 242.2-1.7 16.2-187 51.6v0.3h-1.2l-0.3 0.1v-0.1h-0.1l-188.6-52L310.8 572h91.1l6.5 73.2 102.4 27.7h0.4l102-27.6 11.4-118.6H510.9v-0.1H306l-22.8-253.5-1.7-24.3h460.3l-1.6 24.3z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className={`adm-icon ${props.className}`} style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

HTMLFill.displayName = 'HTMLFill';

HTMLFill.defaultProps = {
  size: '1em',
  style: {}
}

export default HTMLFill;