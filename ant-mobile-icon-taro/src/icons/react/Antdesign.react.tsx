// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Antdesign: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9 0.1 0.1c-18.5-18.5-50.3-50.3-95.3-95.2-21.2-20.7-55.5-20.5-76.5 0.5L80.9 474.2c-21.2 21.1-21.2 55.3 0 76.4L474.6 944c21.2 21.1 55.4 21.1 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6-19-18.9-49.7-18.9-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c0.4-0.4 0.9-0.7 1.3-1.1 5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0z' fill='<%= color %>' /><path d='M408.6 514.4a106.3 106.2 0 1 0 212.6 0 106.3 106.2 0 1 0-212.6 0Z' fill='<%= color %>' /><path d='M944.8 475.8L821.9 353.5c-19-18.9-49.8-18.9-68.7 0.1-19 18.9-19 49.7 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7c-19 18.9-19 49.7 0 68.6 19 18.9 49.7 18.9 68.7 0l121.8-121.7c21.1-21.1 21.1-55.2-0.1-76.4z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className={`adm-icon ${props.className}`} style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

Antdesign.displayName = 'Antdesign';

Antdesign.defaultProps = {
  size: 18,
  style: {}
}

export default Antdesign;