import React from 'react';
import { View } from '@tarojs/components';

import './index.less';

export interface IDocHeaderProps {
  title?: string;
}

const DocHeader = ({ title }: IDocHeaderProps) => {
  return (
    <View className="doc-header">
      <View className="doc-header__title">{title}</View>
    </View>
  );
};

export default DocHeader;
