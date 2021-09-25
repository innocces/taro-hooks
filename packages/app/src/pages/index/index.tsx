import React, { useCallback } from 'react';
import { AtIcon } from 'taro-ui';
import { Image, View } from '@tarojs/components';

import { ENV_TYPE, useShareAppMessage } from '@tarojs/taro';
import { useEnv, useRouter, useModal, useUpdateManager } from 'taro-hooks';

import './index.less';

import logoImg from '../../../../../public/image/hook.png';

import { List } from '../../constant';

const Index = () => {
  const env = useEnv();
  const [routerInfo, { navigateTo }] = useRouter();
  const [show] = useModal({ mask: true, title: '温馨提示', showCancel: false });

  const onUpdateReady = useCallback(
    (manager) => {
      show({
        title: '更新提示',
        content: '新版本已经准备好，请重启应用更新',
      }).then(() => {
        manager.applyUpdate();
      });
    },
    [show],
  );

  useUpdateManager({
    onUpdateReady,
  });

  useShareAppMessage(() => {
    return {
      title: 'Taro Hooks: 为Taro而设计的Hooks Library',
      path: '/pages/index/index',
      imageUrl: require('../../../../../public/image/hook.png'),
    };
  });

  const handleLocation = useCallback(
    (route: string) => {
      if (!routerInfo && env === ENV_TYPE.WEB) {
        show({
          content: 'web|h5暂不全体预览, 请点击对应hooks查看示例',
        });
      } else {
        navigateTo('/pages/panel/index?id=' + route.toLowerCase());
      }
    },
    [env, routerInfo, navigateTo, show],
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
            onClick={() => handleLocation(item.id)}
          >
            <AtIcon
              prefixClass="iconfont"
              value={item.icon}
              className="module-list__icon"
            />
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
