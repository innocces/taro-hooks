import React, { FC } from 'react';
import { View } from '@tarojs/components';
import './index.less';

interface Props {
  title: string;
  padding?: string;
  border?: string;
  background?: string;
}

const DemoBlock: FC<Props> = (props) => {
  return (
    <View className="demo-lock">
      <View className="title">{props.title}</View>
      <View
        className="content"
        style={{
          padding: props.padding,
          background: props.background,
          border: props.border,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

DemoBlock.defaultProps = {
  padding: '12px 12px',
  background: '#ffffff',
};

export default DemoBlock;
