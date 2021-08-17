import React, { useCallback, useEffect, useState } from 'react';
import { AtIcon } from 'taro-ui';
import { Image, View } from '@tarojs/components';

import { ENV_TYPE } from '@tarojs/taro';
import { useEnv, useRouter, useModal } from 'taro-hooks';

import './index.less';

import logoImg from '../../../../../public/image/hook.png';

import { List } from '../../constant';

const Index = () => {
  const env = useEnv();
  const [routerInfo, { navigateTo }] = useRouter();
  const [show] = useModal({ mask: true, title: '温馨提示', showCancel: false });

  useEffect(() => {
    console.log(BUILD_MODE);
    if (BUILD_MODE) {
      show({
        content: '由于个人账号限制, 无法在线预览useVideo. 可至github查看',
      });
    }
  }, [show]);

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
