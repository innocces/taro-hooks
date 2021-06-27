import React from 'react';
import { View } from '@tarojs/components';

import './index.less';

export interface IPaneTitleProps {
  title: string;
}

const PaneTitle = ({ title }: IPaneTitleProps) => (
  <View className="pane-title">{title}</View>
);

export default PaneTitle;
