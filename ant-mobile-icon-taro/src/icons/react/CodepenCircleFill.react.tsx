
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const CodepenCircleFill: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M488.1 414.7V303.4L300.9 428l83.6 55.8zM742.2 552.4v-79.8l-59.8 39.9z' fill='<%= color %>' /><path d='M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m278 533c0 1.1-0.1 2.1-0.2 3.1 0 0.4-0.1 0.7-0.2 1-0.1 0.7-0.2 1.3-0.4 2-0.1 0.4-0.2 0.8-0.4 1.2-0.2 0.6-0.4 1.2-0.6 1.7-0.2 0.4-0.4 0.8-0.5 1.2-0.3 0.5-0.5 1.1-0.8 1.6-0.2 0.4-0.4 0.7-0.7 1.1-0.3 0.5-0.7 1-1 1.5-0.3 0.4-0.5 0.7-0.8 1-0.4 0.4-0.8 0.9-1.2 1.3-0.3 0.3-0.6 0.6-1 0.9-0.4 0.4-0.9 0.8-1.4 1.1-0.4 0.3-0.7 0.6-1.1 0.8-0.1 0.1-0.3 0.2-0.4 0.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-0.1-0.1-0.3-0.2-0.4-0.3-0.4-0.3-0.7-0.5-1.1-0.8-0.5-0.4-0.9-0.7-1.3-1.1-0.3-0.3-0.6-0.6-1-0.9-0.4-0.4-0.8-0.8-1.2-1.3-0.3-0.3-0.6-0.7-0.8-1-0.4-0.5-0.7-1-1-1.5-0.2-0.4-0.5-0.7-0.7-1.1-0.3-0.5-0.6-1.1-0.8-1.6-0.2-0.4-0.4-0.8-0.5-1.2-0.2-0.6-0.4-1.2-0.6-1.7-0.1-0.4-0.3-0.8-0.4-1.2-0.2-0.7-0.3-1.3-0.4-2-0.1-0.3-0.1-0.7-0.2-1-0.1-1-0.2-2.1-0.2-3.1V427.9c0-1 0.1-2.1 0.2-3.1 0.1-0.3 0.1-0.7 0.2-1 0.1-0.7 0.2-1.3 0.4-2 0.1-0.4 0.2-0.8 0.4-1.2 0.2-0.6 0.4-1.2 0.6-1.7 0.2-0.4 0.4-0.8 0.5-1.2 0.2-0.5 0.5-1.1 0.8-1.6 0.2-0.4 0.4-0.7 0.7-1.1 0.6-0.9 1.2-1.7 1.8-2.5 0.4-0.4 0.8-0.9 1.2-1.3 0.3-0.3 0.6-0.6 1-0.9 0.4-0.4 0.9-0.8 1.3-1.1 0.4-0.3 0.7-0.6 1.1-0.8 0.1-0.1 0.3-0.2 0.4-0.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c0.1 0.1 0.3 0.2 0.4 0.3 0.4 0.3 0.7 0.5 1.1 0.8 0.5 0.4 0.9 0.7 1.4 1.1 0.3 0.3 0.6 0.6 1 0.9 0.4 0.4 0.8 0.8 1.2 1.3 0.7 0.8 1.3 1.6 1.8 2.5 0.2 0.4 0.5 0.7 0.7 1.1 0.3 0.5 0.6 1 0.8 1.6 0.2 0.4 0.4 0.8 0.5 1.2 0.2 0.6 0.4 1.2 0.6 1.7 0.1 0.4 0.3 0.8 0.4 1.2 0.2 0.7 0.3 1.3 0.4 2 0.1 0.3 0.1 0.7 0.2 1 0.1 1 0.2 2.1 0.2 3.1V597z' fill='<%= color %>' /><path d='M535.9 610.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <View className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></View>
  )
}

CodepenCircleFill.displayName = 'CodepenCircleFill';

CodepenCircleFill.defaultProps = {
  size: 18,
  style: {}
}

export default CodepenCircleFill;