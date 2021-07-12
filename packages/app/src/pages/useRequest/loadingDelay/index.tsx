/**
 * desc: 通过设置 `options.loadingDelay` ，可以延迟 `loading` 变成 `true` 的时间，有效防止闪烁。
 */
import React from 'react';
import { useRequest } from 'taro-hooks';

import { AtButton } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

async function getCurrentTime(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().getTime());
    }, 100);
  });
}

const LoadingDelayRequest = () => {
  const getTimeAction = useRequest(getCurrentTime);

  const withLoadingDelayAction = useRequest(getCurrentTime, {
    loadingDelay: 200,
  });

  const trigger = () => {
    getTimeAction.run();
    withLoadingDelayAction.run();
  };

  return (
    <DocPage title="useRequest loading Delay" panelTitle="loading Delay">
      <View>
        loadingDelay can set delay loading, which can effectively prevent
        loading from flickering.
      </View>
      <AtButton
        type="primary"
        onClick={trigger}
        customStyle={{ margin: '10px 0' }}
      >
        run
      </AtButton>
      <View style={{ marginBottom: '10px' }}>
        Current Time: {getTimeAction.loading ? 'loading' : getTimeAction.data}
      </View>
      <View>
        Current Time:{' '}
        {withLoadingDelayAction.loading
          ? 'loading'
          : withLoadingDelayAction.data}
      </View>
    </DocPage>
  );
};

export default LoadingDelayRequest;
