/**
 * desc: 通过 `options.fetchKey` ，可以将请求进行分类，每一类的请求都有独立的状态，你可以在 `fetches` 中找到所有的请求。
 */
import React, { useState } from 'react';
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

const CacheKeyRequest = () => {
  const [state, setState] = useState<boolean>(false);

  return (
    <DocPage title="useRequest 请求" panelTitle="缓存 & SWR">
      <View>
        You can click the button multiple times, the article component will show
        the cached data first.
      </View>
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

export default CacheKeyRequest;
