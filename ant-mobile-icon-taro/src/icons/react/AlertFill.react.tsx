
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const AlertFill: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 244c176.179 0 319 142.821 319 319v233c0 17.673-14.327 32-32 32H225c-17.673 0-32-14.327-32-32V563c0-176.179 142.821-319 319-319zM484 68h56a8 8 0 0 1 8 8v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8V76a8 8 0 0 1 8-8zM177.255 191.657a8 8 0 0 1 11.314 0l67.882 67.882a8 8 0 0 1 0 11.314l-39.598 39.598a8 8 0 0 1-11.314 0l-67.882-67.882a8 8 0 0 1 0-11.314l39.598-39.598z m669.598 0l39.598 39.598a8 8 0 0 1 0 11.314l-67.882 67.882a8 8 0 0 1-11.314 0l-39.598-39.598a8 8 0 0 1 0-11.314l67.882-67.882a8 8 0 0 1 11.314 0zM192 892h640c17.673 0 32 14.327 32 32v24a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-24c0-17.673 14.327-32 32-32z m148-317v253h64V575h-64z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></Text>
  )
}

AlertFill.displayName = 'AlertFill';

AlertFill.defaultProps = {
  size: 18,
  style: {}
}

export default AlertFill;
