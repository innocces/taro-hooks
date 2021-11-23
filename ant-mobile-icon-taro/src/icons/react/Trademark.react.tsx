// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const Trademark: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z' fill='<%= color %>' /><path d='M599.5 549.3c34.8-12.8 78.4-49 78.4-119.2 0-71.2-45.5-131.1-144.2-131.1H378c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.5c4.4 0 8-3.6 8-8V561.2h88.7l74.6 159.2c1.3 2.8 4.1 4.6 7.2 4.6h62c1.2 0 2.4-0.3 3.5-0.8 4-2 5.6-6.7 3.6-10.7l-80.6-164.2zM522 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.5 0 46.9-29.8 72.5-82.8 72.5z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text {...props} className={`adm-icon ${props.className}`} style={{...style, background, width: renderSize, height: renderSize}}></Text>
  )
}

Trademark.displayName = 'Trademark';

Trademark.defaultProps = {
  size: 18,
  style: {}
}

export default Trademark;