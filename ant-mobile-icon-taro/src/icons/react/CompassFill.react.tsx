// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const CompassFill: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zM327.3 702.4c-2 0.9-4.4 0-5.3-2.1-0.4-1-0.4-2.2 0-3.2l98.7-225.5 132.1 132.1-225.5 98.7z m375.1-375.1l-98.7 225.5-132.1-132.1L697.1 322c2-0.9 4.4 0 5.3 2.1 0.4 1 0.4 2.1 0 3.2z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

CompassFill.displayName = 'CompassFill';

CompassFill.defaultProps = {
  size: 18,
  style: {}
}

export default CompassFill;