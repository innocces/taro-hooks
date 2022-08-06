import React from 'react';
import DemoContent from '@src/components/DemoContent';
import { Cell } from '@taroify/core';
import { useApp, useModal } from 'taro-hooks';
import { useTaroEffect } from '@tarojs/taro';
import Mock from 'mockjs';

type GlobalData = Record<'framework' | 'package' | 'basic', string>;

export default () => {
  const { app, globalData, setGlobalData } = useApp<GlobalData>(true);
  const show = useModal({
    title: '设置全局变量',
    content: '您是否要随机修改当前全局变量',
    mask: true,
  });

  useTaroEffect(() => {
    const { window, pages } = app?.config ?? {};
    show({
      title: 'APP',
      content: `当前获取实例(${
        window?.navigationBarTitleText ?? ''
      }): 页面个数(${pages?.length ?? 0})`,
    });
  }, []);

  const handleClick = (key: keyof GlobalData) => {
    show().then(({ confirm }) => {
      if (confirm) {
        setGlobalData(key, Mock.Random.name());
      }
    });
  };

  return (
    <DemoContent>
      <Cell.Group clickable>
        {Object.entries(globalData).map(([key, value]) => (
          <Cell
            key={key}
            title={key}
            brief={JSON.stringify(value)}
            onClick={() => handleClick(key)}
          ></Cell>
        ))}
      </Cell.Group>
    </DemoContent>
  );
};
