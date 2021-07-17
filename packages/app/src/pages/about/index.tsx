import React, { useCallback, useState } from 'react';
import { AtIcon, AtToast, AtFab } from 'taro-ui';
import { Image, View } from '@tarojs/components';

import { useClipboardData } from 'taro-hooks';

import 'taro-ui/dist/style/components/article.scss';
import './index.less';
import '../index/index.less';

import logoImg from '../../../../../public/image/hook.png';

const git = 'https://github.com/innocces/taro-hooks';

const Index = () => {
  const [visible, changeVisible] = useState(false);
  const [clipboardData, { set }] = useClipboardData();

  const handleStart = useCallback(() => {
    set(git).then(() => {
      changeVisible(true);
    });
  }, [set]);

  return (
    <View className="page page-index">
      <AtToast
        isOpened={visible}
        text="复制成功, 请打开浏览器进行访问"
        hasMask
        icon="heart"
        onClose={() => changeVisible(false)}
      />
      <View className="logo">
        <Image src={logoImg} className="img" mode="widthFix" />
      </View>
      <View className="at-article">
        <View className="at-article__h2" style={{ marginBottom: '20rpx' }}>
          简介
        </View>
        <View className="at-article__info">作者: 阿酱</View>
        <View className="at-article__p">为Taro而设计的Hooks Library</View>
        <View className="at-article__p">
          请点击下方按钮前往github给予一枚星星✨
        </View>
      </View>
      <AtFab className="start-button" onClick={handleStart}>
        <AtIcon value="star-2" />
      </AtFab>
    </View>
  );
};

export default Index;
