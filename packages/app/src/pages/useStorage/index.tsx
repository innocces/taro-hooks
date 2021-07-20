import React, { useCallback } from 'react';
import { AtList, AtListItem, AtMessage, AtDivider, AtCard } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

import { useStorage } from 'taro-hooks';
import Taro from '@tarojs/taro';
import Mock from 'mockjs';

import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/flex.scss';

export default () => {
  const [storageInfo, { set, get, remove }] = useStorage();

  const handleSetStorage = useCallback(() => {
    set(Mock.mock('@name()'), Mock.mock('@name()')).then((res: boolean) => {
      Taro.atMessage({
        message: '设置缓存' + res ? '成功' : '失败',
      });
    });
  }, [set]);

  const handleGetStorage = useCallback(async () => {
    const { keys } = storageInfo;
    let message = '获取缓存';
    if (!keys.length) {
      message = '暂无缓存可获取';
    } else {
      const data = await get(keys[0]);
      if (data) {
        message += `: ${data}`;
      } else {
        message += '失败';
      }
    }
    Taro.atMessage({
      message,
    });
  }, [storageInfo, get]);

  const handleRemoveStorage = useCallback(
    async (all?: boolean) => {
      const { keys } = storageInfo;
      if (keys.length && !all) {
        const result = await remove(keys[0]);
        Taro.atMessage({
          message: '移除单个缓存' + result ? '成功' : '失败',
        });
      } else {
        const result = await remove();
        Taro.atMessage({
          message: '移除缓存' + result ? '成功' : '失败',
        });
      }
    },
    [storageInfo, remove],
  );

  return (
    <>
      <AtMessage />
      <DocPage title="useStorage 数据缓存" panelTitle="useStorage">
        <AtList>
          <AtListItem title="set" note="设置缓存" onClick={handleSetStorage} />
          <AtListItem title="get" note="获取缓存" onClick={handleGetStorage} />
          <AtListItem
            title="remove"
            note="移除一个缓存"
            onClick={() => handleRemoveStorage()}
          />
          <AtListItem
            title="remove"
            note="移除所有缓存"
            onClick={() => handleRemoveStorage(true)}
          />
        </AtList>
        <AtDivider content="下面为缓存展示" />
        <AtCard title="当前缓存个数">
          <View>缓存占用: {storageInfo.currentSize}</View>
          <View>缓存限制: {storageInfo.limitSize}</View>
          <View>当前缓存数量: {storageInfo.keys.length}</View>
          <View>分别为: </View>
          {Object.entries(storageInfo.storage).map(([key, value]) => (
            <View key={key}>
              {key} - {JSON.stringify(value)}
            </View>
          ))}
        </AtCard>
      </DocPage>
    </>
  );
};
