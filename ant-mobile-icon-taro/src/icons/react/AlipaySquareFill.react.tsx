// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const AlipaySquareFill: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M308.6 545.7c-19.8 2-57.1 10.7-77.4 28.6-61 53-24.5 150 99 150 71.8 0 143.5-45.7 199.8-119-80.2-38.9-148.1-66.8-221.4-59.6z' fill='<%= color %>' /><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m29.4 663.2S703 689.4 598.7 639.5C528.8 725.2 438.6 777.3 345 777.3c-158.4 0-212.1-138.1-137.2-229 16.3-19.8 44.2-38.7 87.3-49.4 67.5-16.5 175 10.3 275.7 43.4 18.1-33.3 33.4-69.9 44.7-108.9H305.1V402h160v-56.2H271.3v-31.3h193.8v-80.1s0-13.5 13.7-13.5H557v93.6h191.7v31.3H557.1V402h156.4c-15 61.1-37.7 117.4-66.2 166.8 47.5 17.1 90.1 33.3 121.8 43.9 114.3 38.2 140.2 40.2 140.2 40.2v122.3z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className={`adm-icon ${props.className}`} style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

AlipaySquareFill.displayName = 'AlipaySquareFill';

AlipaySquareFill.defaultProps = {
  size: 18,
  style: {}
}

export default AlipaySquareFill;