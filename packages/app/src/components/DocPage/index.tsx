import React, { useEffect } from 'react';
import Taro, { PropsWithChildren } from '@tarojs/taro';

import { useEvent } from 'taro-hooks';

import { View } from '@tarojs/components';
import PaneTitle from '../PaneTitle';
import DocHeader from '../DocHeader';

import './index.less';

export type IDocPageProps = PropsWithChildren<{
  title?: string;
  panelTitle?: string;
}>;

const DocPage = ({ children, title, panelTitle }: IDocPageProps) => {
  // fix runtime change problem
  const [state, { emitEvent }] = useEvent('');

  useEffect(() => {
    if (!Taro.atMessage) {
      Taro.atMessage = (...arg) => emitEvent('atMessage', ...arg);
    }
  }, [emitEvent]);

  return (
    <View className="page">
      <DocHeader title={title} />
      <View className="doc-body">
        <View className="panel">
          {panelTitle && <PaneTitle title={panelTitle} />}
          <View className="panel__content">{children}</View>
        </View>
      </View>
    </View>
  );
};

export default DocPage;
