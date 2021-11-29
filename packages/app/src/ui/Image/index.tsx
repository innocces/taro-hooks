import React from 'react';
import { Image, Space } from 'ant-mobile-taro';
import { View } from '@tarojs/components';
import DemoBlock from '@components/DemoBlock';
import demoImage from '../../assets/image/image.jpg';

import './index.less';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Image width={100} height={100} src={demoImage} />
      </DemoBlock>
      <DemoBlock title="多种填充模式">
        <Space wrap>
          <Image src={demoImage} width={100} height={100} fit="scaleToFill" />
          <Image src={demoImage} width={100} height={100} fit="aspectFit" />
          <Image src={demoImage} width={100} height={100} fit="aspectFill" />
          <Image src={demoImage} width={100} height={100} fit="widthFix" />
          <Image src={demoImage} width={100} height={100} fit="heightFix" />
          <Image src={demoImage} width={100} height={100} fit="top" />
          <Image src={demoImage} width={100} height={100} fit="bottom" />
          <Image src={demoImage} width={100} height={100} fit="center" />
          <Image src={demoImage} width={100} height={100} fit="left" />
          <Image src={demoImage} width={100} height={100} fit="right" />
          <Image src={demoImage} width={100} height={100} fit="top left" />
          <Image src={demoImage} width={100} height={100} fit="top right" />
          <Image src={demoImage} width={100} height={100} fit="bottom left" />
          <Image src={demoImage} width={100} height={100} fit="bottom right" />
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义圆角">
        <Space wrap>
          <Image
            src={demoImage}
            width={64}
            height={64}
            fit="aspectFill"
            style={{ borderRadius: '4px' }}
          />
          <Image
            src={demoImage}
            width={64}
            height={64}
            fit="aspectFill"
            style={{ borderRadius: '8px' }}
          />
          <Image
            src={demoImage}
            width={64}
            height={64}
            fit="aspectFill"
            style={{ borderRadius: '32px' }}
          />
        </Space>
      </DemoBlock>
      <DemoBlock title="通过 CSS 变量统一设置图片大小">
        <View className="imagesContainer">
          <Space wrap>
            <Image src={demoImage} />
            <Image src={demoImage} />
            <Image src={demoImage} />
          </Space>
        </View>
      </DemoBlock>
      <DemoBlock title="加载失败">
        <Image src="/404" width={100} height={100} />
      </DemoBlock>
      <DemoBlock title="懒加载">
        <Image width={100} height={100} lazy src={demoImage} />
      </DemoBlock>
    </>
  );
};
