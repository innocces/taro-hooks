// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';

const PiechartCircleFil: FC<ITaroIconProps> = ({
  size,
  style = {},
  color,
  usePX,
  ...props
}) => {
  const renderSize = useMemo(() => {
    return usePX
      ? pxTransform(size!).replace(/rpx|rem/gi, 'px')
      : pxTransform(size!);
  }, [usePX, size, style]);

  const background = useMemo(() => {
    const base64SVG = template(
      "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26c-53.9 0-106.3 10.6-155.5 31.4-47.5 20.1-90.3 48.9-127 85.6-36.7 36.7-65.5 79.4-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6 49.3 20.9 101.7 31.5 155.6 31.5 53.9 0 106.3-10.6 155.5-31.4 47.5-20.1 90.3-48.9 127-85.6 36.7-36.7 65.5-79.4 85.6-127 20.9-49.3 31.5-101.7 31.5-155.6v-26c-0.1-4.4-3.7-8-8.1-8z' fill='<%= color %>' /><path d='M951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3-65.7-65.7-152.6-106.4-244.9-114.9L560.1 73c-4.7-0.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-0.1 8.4-4 8-8.6z' fill='<%= color %>' /></svg>",
      { size: renderSize, color: hex2rgb(color || '') },
    );
    const escape = base64SVG.replace(/<|>/g, (str: string) =>
      encodeURIComponent(str),
    );
    return `url("data:image/svg+xml, ${escape}") no-repeat`;
  }, [color, renderSize]);

  return (
    <View
      className="adm-icon"
      style={{ ...style, background, width: renderSize, height: renderSize }}
      {...props}
    ></View>
  );
};

PiechartCircleFil.displayName = 'PiechartCircleFil';

PiechartCircleFil.defaultProps = {
  size: 18,
  style: {},
};

export default PiechartCircleFil;
