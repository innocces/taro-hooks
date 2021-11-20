
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Sound: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zM934 476H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zM892.1 737.8l-110.3-63.7c-2.5-1.4-5.2-2.1-7.9-2.1-5.5 0-10.9 2.9-13.8 8l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800c2.5 1.4 5.2 2.1 7.9 2.1 5.5 0 10.9-2.9 13.8-8l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344c2.9 5.1 8.3 8 13.8 8 2.7 0 5.4-0.7 7.9-2.1L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230c-2.9-5.1-8.3-8-13.8-8-2.7 0-5.4 0.7-7.9 2.1L746 287.8c-7.6 4.4-10.2 14.2-5.8 21.8L760 344z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></Text>
  )
}

Sound.displayName = 'Sound';

Sound.defaultProps = {
  size: 18,
  style: {}
}

export default Sound;
