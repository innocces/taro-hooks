/**
 * desc: |
 *  通过设置 `options.pollingInterval` ，进入轮询模式，定时触发函数执行。
 *
 *  - 通过设置 `options.pollingWhenHidden=false` ，在屏幕不可见时，暂时暂停定时任务。
 *  - 通过 `run` / `cancel` 来 开启/停止 轮询。
 *  - 在 `options.manual=true` 时，需要第一次执行 `run` 后，才开始轮询。
 */

import React from 'react';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';
import { AtButton } from 'taro-ui';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name()'));
    }, 1000);
  });
}

export default () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
  });

  return (
    <DocPage title="useRequest 请求" panelTitle="轮询">
      <View>Username: {loading ? 'loading' : data}</View>
      <AtButton type="primary" onClick={run} customStyle={{ margin: '10px 0' }}>
        start
      </AtButton>
      <AtButton type="secondary" onClick={cancel}>
        stop
      </AtButton>
    </DocPage>
  );
};
