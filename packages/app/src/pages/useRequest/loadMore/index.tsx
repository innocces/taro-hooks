/**
 * desc: 通过设置 cacheKey，可以缓存所有 list 数据。
 */
import React, { useState } from 'react';
import { useRequest } from 'taro-hooks';

import { View } from '@tarojs/components';
import { AtButton, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';

interface Item {
  id?: string;
  name: string;
}

interface Result {
  list: Item[];
  nextId: string | undefined;
}

const resultData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export async function getLoadMoreList(
  nextId: any,
  limit: any,
): Promise<Result> {
  let start = 0;
  if (nextId) {
    start = resultData.findIndex((i) => i === nextId);
  }
  const end = start + limit;
  const list = resultData.slice(start, end).map((id) => ({
    id,
    name: `project ${id} (server time: ${Date.now()})`,
  }));
  const nId = resultData.length >= end ? resultData[end] : undefined;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list,
        nextId: nId,
      });
    }, 1000);
  });
}

const LoadMoreRequest = () => {
  const [state, setState] = useState<boolean>(false);

  const { data, loading, loadMore, loadingMore } = useRequest(
    (d: Result | undefined) => getLoadMoreList(d?.nextId, 3),
    {
      loadMore: true,
      cacheKey: 'loadMoreDemoCacheId',
    },
  );

  return (
    <DocPage title="useRequest 普通加载更多" panelTitle="普通加载更多">
      <View>
        You can click the button multiple times, the loadmore will be cached.
      </View>
      <AtButton
        customStyle={{ margin: '10px 0' }}
        onClick={() => setState(!state)}
      >
        show/hidden
      </AtButton>
      {state && (
        <>
          {loading ? (
            <View>loading....</View>
          ) : (
            <AtList>
              {data?.list?.map(({ id, name }: Item) => (
                <AtListItem key={id} title={id} note={name} />
              ))}
            </AtList>
          )}
          {loadingMore ? (
            <View>loading more...</View>
          ) : (
            <AtButton onClick={loadMore} disabled={!data?.nextId}>
              {data?.nextId ? 'click to load more' : 'no more'}
            </AtButton>
          )}
        </>
      )}
    </DocPage>
  );
};

export default LoadMoreRequest;
