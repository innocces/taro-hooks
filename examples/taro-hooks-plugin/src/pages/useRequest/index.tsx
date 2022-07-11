import React from 'react';
import { navigateTo } from '@tarojs/taro';
import { Block } from '@tarojs/components';
import { Cell } from '@taroify/core';
import { Arrow } from '@taroify/icons';

const useRequestDemoItem = [
  {
    name: 'basic',
    title: '基础用法',
    needIndex: true,
  },
  {
    name: 'basic/manualRun',
    title: '手动触发(run)',
  },
  {
    name: 'basic/manualRunAsync',
    title: '手动触发(runAsync)',
  },
  {
    name: 'basic/lifeCycle',
    title: '生命周期',
  },
  {
    name: 'basic/refresh',
    title: '刷新（重复上一次请求）',
  },
  {
    name: 'basic/mutate',
    title: '立即变更数据',
  },
  {
    name: 'basic/params',
    title: '参数管理',
  },
  {
    name: 'basic/cancel',
    title: '取消请求',
  },
  {
    name: 'loadingDelay',
    title: 'loading Delay',
    needIndex: true,
  },
  {
    name: 'polling',
    title: '轮询',
    needIndex: true,
  },
  {
    name: 'ready',
    title: 'Ready - 自动模式',
    needIndex: true,
  },
  {
    name: 'ready/manualReady',
    title: 'Ready - 手动模式',
  },
  {
    name: 'refreshDeps',
    title: '依赖刷新',
    needIndex: true,
  },
  {
    name: 'refreshOnWindowFocus',
    title: '屏幕聚焦重新请求',
    needIndex: true,
  },
];

function UseRequest() {
  const handleNavigate = (path, needIndex) => {
    navigateTo({
      url: '/pages/useRequest/' + path + (needIndex ? '/index' : ''),
    });
  };
  return (
    <Block>
      {useRequestDemoItem.map(({ name, title, needIndex }) => (
        <Cell
          title={title}
          key={name}
          clickable
          rightIcon={<Arrow />}
          onClick={() => handleNavigate(name, needIndex)}
        ></Cell>
      ))}
    </Block>
  );
}

export default UseRequest;
