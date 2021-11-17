import React, { ComponentType } from 'react';
import { View } from '@tarojs/components';
import * as TaroIcons from 'ant-mobile-icon-taro';
import DemoBlock from '@components/DemoBlock';
import './index.less';

const { Heart, RocketFill } = TaroIcons;

const items: {
  name: string;
  component: ComponentType;
}[] = [];

for (let key in TaroIcons) {
  const component = (TaroIcons as any)[key] as ComponentType;
  if (typeof component !== 'function') {
    continue;
  }
  items.push({
    name: key,
    component,
  });
}

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        {/* <Space wrap> */}
        <Heart usePX size={36} />
        <RocketFill usePX size={36} />
        {/* </Space> */}
      </DemoBlock>
      <DemoBlock title="大小">
        {/* <Space wrap align="center"> */}
        <RocketFill usePX size={12} />
        <RocketFill usePX size={24} />
        <RocketFill usePX size={36} />
        <RocketFill usePX size={48} />
        {/* </Space> */}
      </DemoBlock>
      <DemoBlock title="颜色">
        {/* <Space wrap > */}
        <RocketFill
          usePX
          size={36}
          color="var(--adm-color-primary)"
          style={{ color: 'var(--adm-color-primary)' }}
        />
        <RocketFill usePX size={36} color="#1677ff" />
        <RocketFill usePX size={36} color="#999" />
        <RocketFill usePX size={36} color="#ff3141" />
        {/* </Space> */}
      </DemoBlock>

      <View className="container">
        {/* <Grid columns={4}> */}
        {items.map((item) => (
          // <Grid.Item key={item.name} className="item">
          <View key={item.name} className="item">
            <View className="icon">
              {/* @ts-ignore */}
              <item.component size={36} usePX />
            </View>
            <View className="label">{item.name}</View>
          </View>
          // {/* </Grid.Item> */}
        ))}
        {/* </Grid> */}
      </View>
    </>
  );
};
