import React from 'react';
import { PropsWithChildren } from '@tarojs/taro';

import { View } from '@tarojs/components';
import PaneTitle from '../PaneTitle';
import DocHeader from '../DocHeader';

import './index.less';

export type IDocPageProps = PropsWithChildren<{
  title?: string;
  panelTitle?: string;
}>;

const DocPage = ({ children, title, panelTitle }: IDocPageProps) => {
  return (
    <View className="page">
      <DocHeader title={title} />
      <View className="doc-body">
        <View className="panel">
          <PaneTitle title={panelTitle} />
          <View className="panel__content">{children}</View>
        </View>
      </View>
    </View>
  );
};

export default DocPage;
