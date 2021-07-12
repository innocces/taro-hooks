/**
 * desc: 如果 useRequest 第一个参数是 `string`、`object` 或 `()=> string|object`，则默认使用 Taro.request 发送网络请求
 */
import React from 'react';
import { useRequest } from 'taro-hooks';

import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

const FetchRequest = () => {
  const { data, error, loading } = useRequest(
    'https://run.mocky.io/v3/cd8e3926-740c-4a2c-ab80-45c0c4fe8dd2',
  );

  return (
    <DocPage title="useRequest 默认请求库" panelTitle="默认请求库">
      <View>
        {error
          ? 'failed to load'
          : loading
          ? 'loading...'
          : 'responese:' + JSON.stringify(data?.data)}
      </View>
    </DocPage>
  );
};

export default FetchRequest;
