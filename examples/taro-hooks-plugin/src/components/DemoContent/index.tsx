import React, { PropsWithChildren } from 'react';
import { View } from '@tarojs/components';
import './index.scss';

interface IDemoContentProps {
  title: string;
  desc?: string;
}

function DemoContent({
  title,
  desc,
  children,
}: PropsWithChildren<IDemoContentProps>) {
  return (
    <View className="demo-content">
      <View className="demo-content-title">{title}</View>
      <View className="demo-content-desc">{desc}</View>
      <View className="demo-content-wrapper">{children}</View>
    </View>
  );
}

export default DemoContent;
