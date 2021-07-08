import React, { useCallback } from 'react';

import { navigateTo } from '@tarojs/taro';

import { AtList, AtListItem } from 'taro-ui';
import DocPage from '@components/DocPage';

import 'taro-ui/dist/style/components/icon.scss';
import { AtListItemProps } from 'taro-ui/types/list';

interface IListItem extends AtListItemProps {
  route: string;
}

const list: IListItem[] = [
  {
    title: '默认请求',
    note: '在组件初次加载时， 自动触发该函数执行。',
    route: 'defaultRequest',
  },
  {
    title: '手动触发',
    note: '通过设置 options.manual = true , 则需要手动调用 run 时才会触发执行异步函数。',
    route: 'manual',
  },
  {
    title: '轮询',
    note: '通过设置 options.pollingInterval，进入轮询模式，定时触发函数执行。',
    route: 'polling',
  },
];

export default () => {
  const routePage = useCallback((route: string) => {
    navigateTo({ url: `${route}/index` });
  }, []);

  return (
    <DocPage title="useRequest 请求">
      <AtList>
        {list.map((listItem, index) => (
          <AtListItem
            {...listItem}
            key={index}
            onClick={() => routePage(listItem.route)}
          />
        ))}
      </AtList>
    </DocPage>
  );
};
