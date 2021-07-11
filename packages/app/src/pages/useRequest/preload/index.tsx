/**
 * desc: 同一个 `cacheKey` 的请求，是全局共享的，也就是你可以提前加载数据。利用该特性，可以很方便的实现预加载。
 */
import React, { useEffect, useState } from 'react';
import { useRequest } from 'taro-hooks';
import Mock from 'mockjs';

import { AtButton } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

async function getArticle(): Promise<{ data: string; time: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Mock.mock('@cparagraph(10, 20)'),
        time: new Date().getTime(),
      });
    }, 1000);
  });
}

const Article = () => {
  const { data, loading } = useRequest(getArticle, {
    cacheKey: 'article',
  });
  if (!data && loading) {
    return <View>loading</View>;
  }
  return (
    <>
      <View>Latest request time: {data?.time}</View>
      <View>{data?.data}</View>
    </>
  );
};

const PreloadRequest = () => {
  const [state, setState] = useState<boolean>(false);
  const { run } = useRequest(getArticle, {
    cacheKey: 'article',
    manual: true,
  });

  useEffect(() => {
    if (!state) {
      run();
    }
  }, [state, run]);

  return (
    <DocPage title="useRequest 请求" panelTitle="预加载">
      <View>When the article hidden, the article data is preloaded.</View>
      <AtButton
        type="primary"
        onClick={() => setState(!state)}
        customStyle={{ marginTop: '10px' }}
      >
        show/hidden
      </AtButton>
      {state && <Article />}
    </DocPage>
  );
};

export default PreloadRequest;
