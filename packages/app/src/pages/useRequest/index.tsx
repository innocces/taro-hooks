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
  {
    title: '并行请求',
    note: '通过 options.fetchKey ，可以将请求进行分类，每一类的请求都有独立的状态，你可以在 fetches 中找到所有的请求。',
    route: 'concurrent',
  },
  {
    title: '依赖请求',
    note: '只有当 options.ready 变为 true 时, 才会发起请求，基于该特性可以实现串行请求，依赖请求等。',
    route: 'ready',
  },
  {
    title: '防抖',
    note: '通过设置 options.debounceInterval ，则进入防抖模式。此时如果频繁触发 run ，则会以防抖策略进行请求。',
    route: 'debounce',
  },
  {
    title: '节流',
    note: '通过设置 options.throttleInterval ，则进入节流模式。此时如果频繁触发 run ，则会以节流策略进行请求。',
    route: 'throttle',
  },
  {
    title: '缓存 & SWR',
    note: '如果设置了 options.cacheKey ， useRequest 会将当前请求结束数据缓存起来。下次组件初始化时，如果有缓存数据，我们会优先返回缓存数据，然后在背后发送新请求，也就是 SWR 的能力。你可以通过 cacheTime 设置缓存数据回收时间，也可以通过 staleTime 设置数据保持新鲜时间。',
    route: 'cacheKey',
  },
  {
    title: '预加载',
    note: '同一个 cacheKey 的请求，是全局共享的，也就是你可以提前加载数据。利用该特性，可以很方便的实现预加载。',
    route: 'preload',
  },
  {
    title: '屏幕聚焦重新请求',
    note: '如果你设置了 options.refreshOnWindowFocus = true ，则在浏览器窗口 refocus 和 revisible 时，会重新发起请求。你可以通过设置 options.focusTimespan 来设置请求间隔，默认为 5000ms 。',
    route: 'refreshOnWindowFocus',
  },
  {
    title: '突变',
    note: '你可以通过 mutate ，直接修改 data 。 mutate 函数参数可以为 newData 或 (oldData)=> newData 。',
    route: 'mutate',
  },
  {
    title: 'Loading Delay',
    note: '通过设置 options.loadingDelay ，可以延迟 loading 变成 true 的时间，有效防止闪烁。',
    route: 'loadingDelay',
  },
  {
    title: 'refreshDeps',
    note: '当 options.refreshDeps 变化时，useRequest 会使用之前的参数重新执行 service。',
    route: 'refreshDeps',
  },
  {
    title: '默认请求库',
    note: '如果 useRequest 第一个参数是 string、object 或 ()=> string|object，则默认使用 Taro.request 发送网络请求',
    route: 'fetch',
  },
  {
    title: '集成请求库',
    note: '通过设置 requstMethod, 可以使用自己的请求库。',
    route: 'axios',
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
