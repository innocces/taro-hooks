<template>
  <demo-content>
    <nut-button shape="square" type="primary" block @click="handleClick()"
      >Click me!</nut-button
    >
  </demo-content>
</template>

<script setup lang="ts">
import { usePromise } from 'taro-hooks';
import { showToast, makePhoneCall } from '@tarojs/taro';

type MakePhoneCallOption = Taro.makePhoneCall.Option;
type MakePhoneCallResult = TaroGeneral.CallbackResult;

const useMakePhoneCall = usePromise<MakePhoneCallOption, MakePhoneCallResult>(
  makePhoneCall,
);

const handleClick = () => {
  useMakePhoneCall({ phoneNumber: '1300000' }).then(
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
</script>
