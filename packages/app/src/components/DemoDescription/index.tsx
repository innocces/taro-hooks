import React, { FC, ReactNode } from 'react';
import { View } from '@tarojs/components';
import './index.less';

const DemoDescription: FC<{
  content?: ReactNode;
}> = (props) => {
  return (
    <View className="demo-description">{props.content || props.children}</View>
  );
};

export default DemoDescription;
