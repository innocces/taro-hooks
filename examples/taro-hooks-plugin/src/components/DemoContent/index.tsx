import React, { PropsWithChildren } from 'react';
import { View } from '@tarojs/components';
import { NoticeBar } from '@taroify/core';
import { VolumeOutlined } from '@taroify/icons';
import { useRouter } from '@tarojs/taro';
import './index.scss';

interface IDemoContentProps {
  title?: string;
  desc?: string;
}

function DemoContent({
  title,
  desc,
  children,
}: PropsWithChildren<IDemoContentProps>) {
  const { params = {} } = useRouter();

  const { title: urlTitle, onlyMini } = transferParams(params);

  return (
    <>
      {Boolean(+onlyMini) && (
        <NoticeBar scrollable>
          <NoticeBar.Icon>
            <VolumeOutlined />
          </NoticeBar.Icon>
          该hook仅可在小程序使用
        </NoticeBar>
      )}
      <View className="demo-content">
        <View className="demo-content-title">{urlTitle ?? title}</View>
        <View className="demo-content-desc">{desc}</View>
        <View className="demo-content-wrapper">{children}</View>
      </View>
    </>
  );
}

export default DemoContent;

function transferParams(params) {
  // @ts-ignore
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => [
      key,
      decodeURIComponent(value as string),
    ]),
  );
}
