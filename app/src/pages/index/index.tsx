import React, { useCallback, useMemo } from 'react';
import { View, Text } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';

import Taro, { ENV_TYPE } from '@tarojs/taro';
import { useEnv } from 'taro-hooks';

import 'taro-ui/dist/style/components/icon.scss';
import './index.less';

import { webPages, weappPages } from '../../route';

const Index = () => {
  const env = useEnv();

  const pages = useMemo(() => {
    return env === ENV_TYPE.WEB ? webPages : weappPages;
  }, [env]);

  const handleLocation = useCallback(
    (route) => {
      if (env === ENV_TYPE.WEAPP) {
        Taro.navigateTo({
          url: route,
        });
      } else {
        window.parent.location = route;
      }
    },
    [env],
  );
  return (
    <AtList>
      {pages.map((config) => {
        const [name, route] = Object.entries(config)[0];
        return (
          <AtListItem
            key={name}
            title={name}
            onClick={() => handleLocation(route)}
          />
        );
      })}
    </AtList>
  );
};

export default Index;
