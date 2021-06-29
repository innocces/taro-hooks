import React, { useCallback, useState } from 'react';

import { useBase64ToArrayBuffer } from 'taro-hooks';
import { encode } from 'base-64';

import 'taro-ui/dist/style/components/article.scss';

import { View } from '@tarojs/components';
import { AtInput } from 'taro-ui';
import DocPage from '../../components/DocPage';

import './index.less';

export default () => {
  const [base64, setBase64] = useState('');
  const [inputValue, setInputValue] = useState('');
  const buffer = useBase64ToArrayBuffer(base64);

  const translateArrayBuffer = useCallback((value) => {
    const arrayBuffer = encode(value);
    setBase64(arrayBuffer);
    setInputValue(value);
    return value;
  }, []);

  return (
    <>
      <DocPage
        title="useBase64ToArrayBuffer"
        panelTitle="useBase64ToArrayBuffer"
      >
        <AtInput
          title="待转换文本"
          type="text"
          value={inputValue}
          placeholder="此处输入文本会自动转换为base64"
          onChange={translateArrayBuffer}
        />
        <View className="at-article__p">当前转换值base64为: </View>
        <View className="at-article__p use-base64-to-array-buffer">
          {base64}
        </View>
        <View className="at-article__p">当前转换值arrayBuffer为: </View>
        <View className="at-article__p use-base64-to-array-buffer">
          Uint8Array({buffer && buffer.byteLength})[{buffer.toString()}]
        </View>
      </DocPage>
    </>
  );
};
