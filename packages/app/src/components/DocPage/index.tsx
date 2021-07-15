import React, {
  useEffect,
  forwardRef,
  CSSProperties,
  ForwardedRef,
} from 'react';
import Taro, { PropsWithChildren } from '@tarojs/taro';

import { useEvent } from 'taro-hooks';

import { View } from '@tarojs/components';
import PaneTitle from '../PaneTitle';
import DocHeader from '../DocHeader';

import './index.less';

export type IDocPageProps = PropsWithChildren<{
  title?: string;
  panelTitle?: string;
  style?: CSSProperties;
  forwardedRef?: ForwardedRef<unknown>;
}>;

const DocPage = ({
  children,
  title,
  panelTitle,
  style,
  forwardedRef,
}: IDocPageProps) => {
  // fix runtime change problem
  const [state, { emitEvent }] = useEvent('');

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

export default forwardRef((props, ref) => (
  <DocPage {...props} forwardedRef={ref} />
));
