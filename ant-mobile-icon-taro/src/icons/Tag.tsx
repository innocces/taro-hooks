// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import React, { FC, useMemo } from 'react';
import { View } from '@tarojs/components';
import { pxTransform } from '@tarojs/taro';
// @ts-ignore
import { template, hex2rgb } from '../util';
import type { ITaroIconProps } from '../type';
import '../style/icon.less';

const Tag: FC<ITaroIconProps> = ({ size, style, color, usePX, ...props }) => {
  const renderSize = useMemo(() => {
    return usePX
      ? pxTransform(size!).replace(/rpx|rem/gi, 'px')
      : pxTransform(size!);
  }, [usePX, size]);

  const background = useMemo(() => {
    const base64SVG = template(
      "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width=<%= size %> height=<%= size %> aria-hidden='true' focusable='false'><path d='M938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-0.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2c-3.9 3.9-3.9 10.2 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8zM459.7 834.7L189.3 564.3 589 164.6 836 188l23.4 247-399.7 399.7z' fill='<%= color %>' /><path d='M680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z m0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z' fill='<%= color %>' /></svg>",
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

Tag.displayName = 'Tag';

Tag.defaultProps = {
  size: 18,
  style: {},
};

export default Tag;