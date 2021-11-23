// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const TrademarkCircleFil: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m164.7 660.2c-1.1 0.5-2.3 0.8-3.5 0.8h-62c-3.1 0-5.9-1.8-7.2-4.6l-74.6-159.2h-88.7V717c0 4.4-3.6 8-8 8H378c-4.4 0-8-3.6-8-8V307c0-4.4 3.6-8 8-8h155.6c98.8 0 144.2 59.9 144.2 131.1 0 70.2-43.6 106.4-78.4 119.2l80.8 164.2c2.1 3.9 0.4 8.7-3.5 10.7z' fill='<%= color %>' /><path d='M523.9 357h-83.4v148H522c53 0 82.8-25.6 82.8-72.4 0-50.3-32.9-75.6-80.9-75.6z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className={`adm-icon ${props.className}`} style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

TrademarkCircleFil.displayName = 'TrademarkCircleFil';

TrademarkCircleFil.defaultProps = {
  size: 18,
  style: {}
}

export default TrademarkCircleFil;