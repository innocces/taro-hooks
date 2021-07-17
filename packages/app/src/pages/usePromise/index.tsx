import React, { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import DocPage from '@components/DocPage';

import { usePromise } from 'taro-hooks';
import Taro, { General } from '@tarojs/taro';

export default () => {
  const makePhoneCallPromise = usePromise(
    { phoneNumber: '132111' },
    'makePhoneCall',
  );

  useEffect(() => {
    makePhoneCallPromise
      .then((res: General.CallbackResult) => {
        Taro.showModal({
          content: '拨号成功',
        });
      })
      .catch((e: any) => {
        Taro.showModal({
          content: e.errMsg,
        });
      })
      .finally((res: General.CallbackResult) => {
        console.log(res);
      });
  }, [makePhoneCallPromise]);

  return (
    <>
      <DocPage title="usePromise 异步" panelTitle="usePromise">
        <View>请观察是否吊起通话</View>
      </DocPage>
    </>
  );
};
