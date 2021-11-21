// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const FastBackward: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M517.6 273.5L230.2 499.3c-4.1 3.2-6.2 8-6.2 12.7 0 4.7 2.1 9.5 6.2 12.7l287.4 225.8c10.7 8.4 26.4 0.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7z m320 0L550.2 499.3c-4.1 3.2-6.2 8-6.2 12.7 0 4.7 2.1 9.5 6.2 12.7l287.4 225.8c10.7 8.4 26.4 0.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7z m-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

FastBackward.displayName = 'FastBackward';

FastBackward.defaultProps = {
  size: 18,
  style: {}
}

export default FastBackward;