import React from 'react';
import { useTaroRef, useTaroState, NodesRef, useReady } from '@tarojs/taro';
import { useSelectorQuery, useToast } from 'taro-hooks';
import DemoContent from '@src/components/DemoContent';
import { Cell, Tabs, Divider } from '@taroify/core';
import { View, ScrollView } from '@tarojs/components';

import './index.less';

export default () => {
  const selector = '.query-demo';
  const fieldsSetting = {
    dataset: true,
    size: true,
    mark: true,
    rect: true,
    scrollOffset: true,
    properties: ['scrollX', 'scrollY'],
    computedStyle: ['margin', 'backgroundColor'],
    context: true,
  };
  const tabValue = useTaroRef<string>('bound');
  const [bounding, setBounding] =
    useTaroState<NodesRef.BoundingClientRectCallbackResult>();
  const [fields, setFields] = useTaroState<TaroGeneral.IAnyObject>({});
  const [scroll, setScroll] =
    useTaroState<NodesRef.ScrollOffsetCallbackResult>();

  const { show } = useToast({
    title: 'useEvent',
    mask: true,
    duration: 500,
    icon: 'none',
  });
  const [, { getBoundingClientRect, getFields, getScrollOffset }] =
    useSelectorQuery();

  const handleGetBounding = async () => {
    try {
      const result = await getBoundingClientRect(selector);
      setBounding(result);
    } catch (e) {
      show({ title: e.errMsg || e.message, icon: 'error' });
    }
  };

  const handleGetFields = async () => {
    try {
      const result = await getFields(selector, fieldsSetting);
      setFields(result);
    } catch (e) {
      show({ title: e.errMsg || e.message, icon: 'error' });
    }
  };

  const handleGetScroll = async () => {
    try {
      const result = await getScrollOffset(selector + '-scroll');
      setScroll(result);
    } catch (e) {
      show({ title: e.errMsg || e.message, icon: 'error' });
    }
  };

  useReady(() => {
    handleGetBounding();
    handleGetFields();
    handleGetScroll();
  });

  return (
    <DemoContent>
      <Tabs sticky animated>
        <Tabs.TabPane title="bound" key="bound">
          <View className="query-demo"></View>
          <Divider>属性</Divider>
          <Cell.Group title="getBoundingClientRect">
            {Object.entries(bounding ?? {}).map(([key, value]) => (
              <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
            ))}
          </Cell.Group>
        </Tabs.TabPane>
        <Tabs.TabPane title="fields" key="fields">
          <View className="query-demo"></View>
          <Divider>属性</Divider>
          <Cell.Group title="getFields">
            {Object.entries(fields ?? {}).map(([key, value]) => (
              <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
            ))}
          </Cell.Group>
        </Tabs.TabPane>
        <Tabs.TabPane title="scroll" key="scroll">
          <ScrollView className="query-demo-scroll" scrollY scrollTop={100}>
            <View className="query-demo"></View>
            <View className="query-demo"></View>
            <View className="query-demo"></View>
          </ScrollView>
          <Divider>属性</Divider>
          <Cell.Group title="getScrollOffset">
            {Object.entries(scroll ?? {}).map(([key, value]) => (
              <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>
            ))}
          </Cell.Group>
        </Tabs.TabPane>
      </Tabs>
    </DemoContent>
  );
};
