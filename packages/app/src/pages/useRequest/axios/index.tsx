/**
 * desc: 通过设置 `requstMethod`, 可以使用自己的请求库。
 */
import React from 'react';
import { useRequest } from 'taro-hooks';
import axios from 'axios/dist/axios.min.js';
import adapter from 'axios-miniprogram-adapter';

import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

const requestMethod = axios.create(
  process.env.TARO_ENV === 'h5'
    ? {}
    : {
        adapter,
      },
);

const MethodRequest = () => {
  const { data, error, loading } = useRequest(
    'https://run.mocky.io/v3/cd8e3926-740c-4a2c-ab80-45c0c4fe8dd2',
    {
      requestMethod: (param: any) => requestMethod(param),
    },
  );

  return (
    <DocPage title="useRequest requstMethod" panelTitle="requstMethod">
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

export default MethodRequest;
