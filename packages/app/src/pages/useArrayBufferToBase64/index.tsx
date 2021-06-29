import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useArrayBufferToBase64 } from 'taro-hooks';

import 'taro-ui/dist/style/components/article.scss';

import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import DocPage from '../../components/DocPage';

import './index.less';

export default () => {
  const [buffer, setBuffer] = useState<ArrayBuffer>(
    new Uint8Array([11, 22, 33]),
  );
  const [base64, setArrayBuffer] = useArrayBufferToBase64(buffer);

  useEffect(() => {
    setArrayBuffer(buffer);
  }, [buffer, setArrayBuffer]);
  const handleClick = useCallback(() => {
    setBuffer(new Uint8Array([99, 10, 88]));
  }, []);

  return (
    <>
      <DocPage
        title="useArrayBufferToBase64"
        panelTitle="useArrayBufferToBase64"
      >
        <AtButton onClick={handleClick}>更改转换ArrayBuffer</AtButton>
        <View className="at-article__p">当前转换值arrayBuffer为: </View>
        <View className="at-article__p use-base64-to-array-buffer">
          Uint8Array({buffer.byteLength})[{buffer.toString()}]
        </View>
        <View className="at-article__p">当前转换值base64为: </View>
        <View className="at-article__p use-base64-to-array-buffer">
          {base64}
        </View>
      </DocPage>
    </>
  );
};
