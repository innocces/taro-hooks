import React, { useCallback, useState } from 'react';
import { AtIcon, AtToast } from 'taro-ui';
import { Image, View } from '@tarojs/components';

import Taro, { ENV_TYPE } from '@tarojs/taro';
import { useEnv } from 'taro-hooks';

import './index.less';

import logoImg from '../../../../../public/image/hook.png';

import { List } from '../../constant';

const Index = () => {
  const env = useEnv();
  const [visible, changeVisible] = useState(false);

  const handleLocation = useCallback(
    (route: string) => {
      if (env === ENV_TYPE.WEB) {
        changeVisible(true);
      } else {
        Taro.navigateTo({
          url: '/pages/panel/index?id=' + route.toLowerCase(),
        });
      }
    },
    [env],
  );

  return (
    <View className="page page-index">
      <AtToast
        isOpened={visible}
        text="web|h5暂不全体预览, 请点击对应hooks查看示例"
        hasMask
        icon="help"
        onClose={() => changeVisible(false)}
      />
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
