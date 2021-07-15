/**
 * desc: 如果 options 中存在 `ref`，则在滚动到底部时，自动触发 loadMore。当然此时你必须设置 `isNoMore`, 以便让 `useRequest` 知道何时停止。
 */
import React, { useRef } from 'react';
import { useRequest } from 'taro-hooks';

import { View, ScrollView } from '@tarojs/components';
import { AtButton, AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';

import type { Item, Result } from './type';
import dataSource from './data';

const asyncFn = ({ pageSize, offset }: any): Promise<Result> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: dataSource.length,
        list: dataSource.slice(offset, offset + pageSize),
      });
    }, 1000);
  });

const LoadMoreRequest = () => {
  const containerRef = useRef<HTMLTaroScrollViewCoreElement>(null);
  const { data, loading, loadingMore, reload, loadMore, noMore } = useRequest(
    (d: Result | undefined) =>
      asyncFn({
        offset: d?.list?.length || 0,
        pageSize: 3,
      }),
    {
      loadMore: true,
      ref: containerRef,
      isNoMore: (d: any) => (d ? d.list.length >= d.total : false),
    },
  );

  const { list = [] } = data || {};

  return (
    <DocPage title="useRequest 上拉加载更多" panelTitle="上拉加载更多">
      <ScrollView
        ref={containerRef}
        style={{ height: '250px' }}
        scrollY
        scrollWithAnimation
      >
        <AtButton customStyle={{ margin: '10px 0' }} onClick={reload}>
          {loading ? 'loading' : 'Reload'}
        </AtButton>

        <AtList>
          {list?.map(({ id, title }: Item) => (
            <AtListItem key={id} title={title} />
          ))}
        </AtList>
        {!noMore && (
          <AtButton onClick={loadMore} disabled={loadingMore}>
            {loadingMore ? 'Loading more...' : 'Click to load more'}
          </AtButton>
        )}
        {noMore && <View>No more data</View>}
        <View style={{ textAlign: 'center', fontSize: 15 }}>
          total: {data?.total}
        </View>
      </ScrollView>
    </DocPage>
  );
};

export default LoadMoreRequest;
