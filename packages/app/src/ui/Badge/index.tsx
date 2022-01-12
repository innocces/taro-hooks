import React from 'react';
import DemoBlock from '@components/DemoBlock';
import { View } from '@tarojs/components';
import { Badge, Space } from 'ant-mobile-taro';
import { Close, Download } from 'ant-mobile-icon-taro/es/index.react';

import './index.less';

export default () => {
  return (
    <>
      <DemoBlock title="基本用法">
        <Space style={{ '--gap': '24px' }}>
          <Badge content="5">
            <View className="box" />
          </Badge>
          <Badge content="新">
            <View className="box" />
          </Badge>
          <Badge content="更新啦">
            <View className="box" />
          </Badge>
          <Badge>
            <View className="box" />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义颜色和偏移量">
        <Space style={{ '--gap': '24px' }}>
          <Badge
            color="#108ee9"
            content={Badge.dot}
            style={{ '--right': '100%', '--top': '100%' }}
          >
            <View className="box" />
          </Badge>
          <Badge
            color="#87d068"
            content={Badge.dot}
            style={{ '--right': '100%' }}
          >
            <View className="box" />
          </Badge>
          <Badge content={Badge.dot}>
            <View className="box" />
          </Badge>
          <Badge color="orange" content={Badge.dot} style={{ '--top': '100%' }}>
            <View className="box" />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义徽标内容">
        <Space style={{ '--gap': '24px' }}>
          <Badge content={<Download color="#ffffff" usePX size={12} />}>
            <View className="box" />
          </Badge>
          <Badge content={<Close color="#ffffff" usePX size={12} />}>
            <View className="box" />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title="独立展示">
        <Space>
          <Badge content="99+" />
          <Badge content="新消息!" />
        </Space>
      </DemoBlock>
    </>
  );
};
