import React from 'react';
import { usePromise } from 'taro-hooks';
import { showToast, makePhoneCall } from '@tarojs/taro';
import DemoContent from '@src/components/DemoContent';
import { Button } from '@taroify/core';

type MakePhoneCallOption = Taro.makePhoneCall.Option;
type MakePhoneCallResult = TaroGeneral.CallbackResult;
export default () => {
  const makePhoneCallPromise = usePromise<
    MakePhoneCallOption,
    MakePhoneCallResult
  >(makePhoneCall);

  const handleClick = () => {
    makePhoneCallPromise({ phoneNumber: '1300000' }).then(
      () => {
        showToast({
          title: '拨号成功',
          mask: true,
          icon: 'success',
        });
      },
      ({ errMsg }) => {
        showToast({
          title: errMsg,
          mask: true,
          icon: 'error',
        });
      },
    );
  };

  return (
    <DemoContent>
      <Button block color="primary" onClick={handleClick} shape="square">
        Click me!
      </Button>
    </DemoContent>
  );
};
