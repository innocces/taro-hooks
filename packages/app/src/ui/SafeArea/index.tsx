import React from 'react';
import { SafeArea } from 'ant-mobile-taro';
import { View } from '@tarojs/components';
import { lorem } from '../../utils/lorem';

export default () => {
  return (
    <View>
      <View style={{ background: '#ace0ff' }}>
        <SafeArea position="top" />
      </View>
      <View>{lorem.generateParagraphs(10)}</View>
      <View style={{ background: '#ffcfac' }}>
        <SafeArea position="bottom" />
      </View>
    </View>
  );
};
