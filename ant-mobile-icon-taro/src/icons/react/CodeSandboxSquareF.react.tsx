
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { Text } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';


const CodeSandboxSquareF: FC<ITaroIconProps> = ({
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
    const base64SVG = template("<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M307.9 536.7l87.6 49.9V681l96.7 55.9V524.8L307.9 418.4z' fill='<%= color %>' /><path d='M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM755.7 653.2L512 794 268.3 653.2V371.8l110-63.6-0.4-0.2h0.2L512 231l134 77h-0.2l-0.3 0.2 110.1 63.6v281.4z' fill='<%= color %>' /><path d='M531.8 736.9l97.3-56.2v-94.1l87-49.5V418.5L531.8 525zM511.8 384.9L418 331l-91.1 52.6 185.2 107 185.2-106.9-91.4-52.8z' fill='<%= color %>' /></svg>", { size: renderSize, color: hex2rgb(color || '') });
    const escape = base64SVG.replace(/<|>/g, (str: string) => encodeURIComponent(str));
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    // @ts-ignore
    <Text className="adm-icon" style={{...style, background, width: renderSize, height: renderSize}} {...props}></Text>
  )
}

CodeSandboxSquareF.displayName = 'CodeSandboxSquareF';

CodeSandboxSquareF.defaultProps = {
  size: 18,
  style: {}
}

export default CodeSandboxSquareF;
