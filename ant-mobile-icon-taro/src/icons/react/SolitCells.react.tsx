// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const SolitCells: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M938.2 508.4L787.3 389c-3-2.4-7.3-0.2-7.3 3.6V478H636V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H596c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H636V546h144v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4c2.4-1.8 2.4-5.4 0-7.2zM428 116H144c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H244v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4c-2.3 1.8-2.3 5.3 0 7.1l151 119.5c2.9 2.3 7.3 0.2 7.3-3.6V546h144v294H184V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

SolitCells.displayName = 'SolitCells';

SolitCells.defaultProps = {
  size: 18,
  style: {}
}

export default SolitCells;