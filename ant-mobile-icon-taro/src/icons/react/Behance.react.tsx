// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../../util';
import type { ITaroIconProps } from '../../type';
import '../../style/icon.less';

const Behance: FC<ITaroIconProps> = ({
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
      "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M634 294.3h199.5v48.4H634zM434.1 485.8c44.1-21.1 67.2-53.2 67.2-102.8 0-98.1-73-121.9-157.3-121.9H112v492.4h238.5c89.4 0 173.3-43 173.3-143 0-61.8-29.2-107.5-89.7-124.7zM220.2 345.1h101.5c39.1 0 74.2 10.9 74.2 56.3 0 41.8-27.3 58.6-66 58.6H220.2V345.1z m115.5 324.8H220.1V534.3H338c47.6 0 77.7 19.9 77.7 70.3 0 49.6-35.9 65.3-80 65.3zM911.5 580.4c0-105.5-61.7-193.4-173.3-193.4-108.5 0-182.3 81.7-182.3 188.8 0 111 69.9 187.2 182.3 187.2 85.1 0 140.2-38.3 166.7-120h-86.3c-9.4 30.5-47.6 46.5-77.3 46.5-57.4 0-87.4-33.6-87.4-90.7h256.9c0.3-5.9 0.7-12.1 0.7-18.4zM653.9 537c3.1-46.9 34.4-76.2 81.2-76.2 49.2 0 73.8 28.9 78.1 76.2H653.9z' fill='<%= color %>' /></svg>",
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

Behance.displayName = 'Behance';

Behance.defaultProps = {
  size: 18,
  style: {},
};

export default Behance;
