// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Windows: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M120.1 770.6L443 823.2V543.8H120.1v226.8z m63.4-163.5h196.2v141.6l-196.2-31.9V607.1zM523.8 833.6l382 62.2v-352h-382v289.8z m63.4-226.5h255.3v214.4l-255.3-41.6V607.1zM523.8 191.4v288.8h382V128.1l-382 63.3z m318.7 225.5H587.3V245l255.3-42.3v214.2zM120.1 480.2H443V201.9l-322.9 53.5v224.8zM183.5 309l196.2-32.5v140.4H183.5V309z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className={`adm-icon ${props.className}`} style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

Windows.displayName = 'Windows';

Windows.defaultProps = {
  size: '1em',
  style: {}
}

export default Windows;