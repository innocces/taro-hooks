// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../util';
import type { ITaroIconProps } from '../type';
import '../style/icon.less';

const SecurityscanFill: FC<ITaroIconProps> = ({
  size,
  style,
  color,
  usePX,
  ...props
}) => {
  const renderSize = useMemo(() => {
    return usePX
      ? pxTransform(size!).replace(/rpx|rem/gi, 'px')
      : pxTransform(size!);
  }, [usePX, size]);

  const background = useMemo(() => {
    const base64SVG = template(
      "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 0.7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c0.2-8.8-6.6-18.3-14.9-21.2zM626.8 554c-48.5 48.5-123 55.2-178.6 20.1l-77.5 77.5c-3.1 3.1-8.2 3.1-11.3 0l-34-34c-3.1-3.1-3.1-8.2 0-11.3l77.5-77.5c-35.1-55.7-28.4-130.1 20.1-178.6 56.3-56.3 147.5-56.3 203.8 0 56.3 56.3 56.3 147.5 0 203.8z' fill='<%= color %>' /><path d='M468.25522 508.730514a80.1 80.1 0 1 0 113.27653-113.280484 80.1 80.1 0 1 0-113.27653 113.280484Z' fill='<%= color %>' /></svg>",
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

SecurityscanFill.displayName = 'SecurityscanFill';

SecurityscanFill.defaultProps = {
  size: 18,
  style: {},
};

export default SecurityscanFill;
