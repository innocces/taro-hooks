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
  {
    name: 'debounce',
    title: '防抖',
    needIndex: true,
  },
  {
    name: 'throttle',
    title: '节流',
    needIndex: true,
  },
  {
    name: 'cache/cacheKey',
    title: '缓存 & SWR',
  },
  {
    name: 'cache/clearCache',
    title: '缓存 & SWR - 删除缓存',
  },
  {
    name: 'cache/params',
    title: '缓存 & SWR - 参数缓存',
  },
  {
    name: 'cache/setCache',
    title: '缓存 & SWR - 自定义缓存',
  },
  {
    name: 'cache/share',
    title: '缓存 & SWR - 数据共享',
  },
  {
    name: 'cache/staleTime',
    title: '缓存 & SWR - 数据保持新鲜',
  },
  {
    name: 'retry',
    title: '错误重试',
    needIndex: true,
  },
];

function UseRequest() {
  const handleNavigate = (path, needIndex) => {
    navigateTo({
      url: '/pages/network/useRequest/' + path + (needIndex ? '/index' : ''),
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
