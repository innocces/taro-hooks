import React, { useCallback } from 'react';
import { AtList, AtListItem, AtMessage, AtDivider, AtCard } from 'taro-ui';
import { View } from '@tarojs/components';
import DocPage from '../../components/DocPage';

import { useEvent } from 'taro-hooks';
import Taro, { ENV_TYPE } from '@tarojs/taro';

import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/flex.scss';

const eventName = 'useEvent';
export default () => {
  const [
    state,
    { setListener, emitEvent, setListenerOnce, removeListener, clearListener },
  ] = useEvent('taro-hooks');

  const handler = useCallback((...args) => {
    Taro.showModal({ title: '监听事件成功', content: JSON.stringify(args) });
  }, []);

  const handleSetListener = useCallback(() => {
    setListener(eventName, handler);
    Taro.atMessage({
      message: '设置监听成功',
    });
  }, [setListener, handler]);

  const handleSetListenerOnce = useCallback(() => {
    setListenerOnce(eventName + '-once', handler);
  }, [setListenerOnce, handler]);

  const handleEmitEvent = useCallback(
    (once) => {
      emitEvent(eventName + (once ? '-once' : ''), 'taro', 'hooks', once);
    },
    [emitEvent],
  );

  const handleRemoveListener = useCallback(() => {
    removeListener(eventName, handler);
  }, [removeListener, handler]);

  const handleClearListener = useCallback(() => {
    clearListener();
  }, [clearListener]);

  return (
    <>
      <AtMessage />
      <DocPage title="useEvent 事件机制" panelTitle="useEvent">
        <AtList>
          <AtListItem
            title="setListener"
            note="设置监听"
            onClick={handleSetListener}
          />
          <AtListItem
            title="emitEvent"
            note="触发监听"
            onClick={() => handleEmitEvent()}
          />
          <AtListItem
            title="setListenerOnce"
            note="设置监听一次并解除"
            onClick={handleSetListenerOnce}
          />
          <AtListItem
            title="emitEvent  once mode"
            note="触发监听once"
            onClick={() => handleEmitEvent(true)}
          />
          <AtListItem
            title="removeListener"
            note="移除监听"
            onClick={handleRemoveListener}
          />
          <AtListItem
            title="clearListener"
            note="移除所有监听"
            onClick={handleClearListener}
          />
        </AtList>
        <AtDivider content="下面为事件展示" />
        <AtCard title="当前事件栈">
          <View>当前监听事件总数: {state.eventNameQueue.length}</View>
          <View>分别为: </View>
          {state.eventNameQueue.map((name: string) => (
            <View key={name}>
              {name} - 监听函数个数:{' '}
              {state.eventQueue[name] ? state.eventQueue[name].length : 0}
            </View>
          ))}
        </AtCard>
      </DocPage>
    </>
  );
};
