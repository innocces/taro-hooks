import React, {
  useEffect,
  forwardRef,
  CSSProperties,
  ForwardedRef,
  FC,
} from 'react';
import Taro from '@tarojs/taro';

import { useEvent } from 'taro-hooks';

import { View } from '@tarojs/components';
import PaneTitle from '../PaneTitle';
import DocHeader from '../DocHeader';

import './index.less';

export interface IDocPageProps {
  title?: string;
  panelTitle?: string;
  style?: CSSProperties;
  forwardedRef?: ForwardedRef<unknown>;
}

const DocPage: FC<IDocPageProps> = ({
  children,
  title,
  panelTitle,
  style,
  forwardedRef,
}) => {
  // fix runtime change problem
  const [_, { emitEvent }] = useEvent('');

  useEffect(() => {
    if (!Taro.atMessage) {
      Taro.atMessage = (...arg) => emitEvent('atMessage', ...arg);
    }
  }, [emitEvent]);

  return (
    <View className="page" ref={forwardedRef} style={style}>
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
