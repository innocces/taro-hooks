import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { Badge, SideBar } from 'ant-mobile-taro';
import DemoBlock from '@components/DemoBlock';

export default () => {
  const tabs = [
    {
      key: 'key1',
      title: '选项一',
      badge: Badge.dot,
    },
    {
      key: 'key2',
      title: '选项二',
      badge: '5',
    },
    {
      key: 'key3',
      title: '选项三',
      badge: '99+',
      disabled: true,
    },
  ];

  const [activeKey, setActiveKey] = useState('key1');

  return (
    <>
      <DemoBlock title="基本用法" padding="0">
        <SideBar>
          {tabs.map((item) => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title="配合 Badge 使用" padding="0">
        <SideBar>
          {tabs.map((item) => (
            <SideBar.Item
              key={item.key}
              title={item.title}
              badge={item.badge}
            />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title="禁用某个选项" padding="0">
        <SideBar>
          {tabs.map((item) => (
            <SideBar.Item
              key={item.key}
              title={item.title}
              disabled={item.disabled}
            />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title="受控组件" padding="0">
        <View style={{ display: 'flex' }}>
          <View>
            <SideBar activeKey={activeKey} onChange={setActiveKey}>
              {tabs.map((item) => (
                <SideBar.Item key={item.key} title={item.title} />
              ))}
            </SideBar>
          </View>
          <View>
            <View style={{ display: activeKey !== 'key1' ? 'none' : 'block' }}>
              A
            </View>
            <View style={{ display: activeKey !== 'key2' ? 'none' : 'block' }}>
              B
            </View>
            <View style={{ display: activeKey !== 'key3' ? 'none' : 'block' }}>
              C
            </View>
          </View>
        </View>
      </DemoBlock>

      <DemoBlock title="自定义宽度" padding="0">
        <SideBar style={{ '--width': '120px' }}>
          {tabs.map((item) => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>

      <DemoBlock title="自定义选项圆角" padding="0">
        <SideBar style={{ '--item-border-radius': '0' }}>
          {tabs.map((item) => (
            <SideBar.Item key={item.key} title={item.title} />
          ))}
        </SideBar>
      </DemoBlock>
    </>
  );
};
