import React, { useCallback, useMemo } from 'react';
import { AtIcon } from 'taro-ui';
import { Image, View } from '@tarojs/components';

import Taro, { ENV_TYPE } from '@tarojs/taro';
import { useEnv } from 'taro-hooks';

import './index.less';

import logoImg from '../../../../../public/image/hook.png';

import { webPages, weappPages } from '../../route';
import List from './constant';

const Index = () => {
  const env = useEnv();

  const pages = useMemo(() => {
    return env === ENV_TYPE.WEB ? webPages : weappPages;
  }, [env]);

  const handleLocation = useCallback(
    (route) => {
      if (env === ENV_TYPE.WEAPP) {
        Taro.navigateTo({
          url: '/' + route,
        });
      } else {
        window.parent.location = route;
      }
    },
    [env],
  );
  return (
    <View className="page page-index">
      <View className="logo">
        <Image src={logoImg} className="img" mode="widthFix" />
      </View>
      <View className="module-list">
        {List.map((item, index) => (
          <View
            className="module-list__item"
            key={index}
            data-id={item.id}
            data-name={item.title}
          >
            <AtIcon value={item.icon} className="module-list__icon" />
            <View className="module-list__info">
              <View className="title">{item.title}</View>
              <View className="content">{item.content}</View>
            </View>
            <View className="module-list__arrow">
              <AtIcon value="chevron-right" />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Index;
