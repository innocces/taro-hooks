import React from 'react';
import { Loading, Space } from 'ant-mobile-taro';
import { View, Text } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock';

import './index.less';

export default () => {
  return (
    <View>
      <DemoBlock title="默认">
        <Loading />
      </DemoBlock>
      <DemoBlock title="主题色的 Loading">
        <Loading color="primary" />
      </DemoBlock>
      <DemoBlock title="白色的 Loading" background="#a5a5a5">
        <Loading color="rgb(255, 255, 255)" />
      </DemoBlock>
      <DemoBlock title="自动适配当前字号">
        <Space align="center">
          <View className="font-14px">
            <Loading />
          </View>
          <View className="font-18px">
            <Loading />
          </View>
          <View className="font-24px">
            <Loading />
          </View>
        </Space>
      </DemoBlock>
      <DemoBlock title="配合文本颜色使用">
        <View style={{ color: '#00b578' }}>
          <Loading color="#00b578" />
          <Text>绿色文字</Text>
        </View>
        <View style={{ color: '#ff3141' }}>
          <Loading color="#ff3141" />
          <Text>红色文字</Text>
        </View>
      </DemoBlock>
    </View>
  );
};
