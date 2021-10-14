import React, { useCallback } from 'react';
import { AtRadio, AtAvatar, AtButton, AtNoticebar } from 'taro-ui';
import DocPage from '@components/DocPage';

import { useUserInfo, useLogin } from 'taro-hooks';
import { UserInfo } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

import 'taro-ui/dist/style/components/flex.scss';
import './index.less';

const MOCK = '1';

const transferOptions = (userInfo: UserInfo) =>
  Object.entries(userInfo).map(([key, value]) => ({
    label: key + ':',
    value: key,
    desc: JSON.stringify(value),
  }));

export default () => {
  const [userInfo = {}, { getUserInfo, getUserProfile }] = useUserInfo();
  const [login] = useLogin();

  const handleGetUserInfo = useCallback(() => {
    login(true).then(() => {
      getUserInfo({ lang: 'zh_CN', withCredentials: true });
    });
  }, [login, getUserInfo]);

  return (
    <>
      <AtNoticebar marquee>该hook仅在小程序中使用</AtNoticebar>
      <DocPage title="useUserInfo 用户信息" panelTitle="useUserInfo">
        <View className="at-row at-row__align--center  at-row__justify--between userinfo">
          <View className="at-col-1 at-col--auto">
            <AtAvatar size="large" image={userInfo.avatarUrl} />
          </View>
          <View className="at-col-9 at-row at-row--wrap">
            <Text className="at-col-12 ellipsis">
              昵称: {userInfo.nickName}
            </Text>
            <Text className="at-col-12">
              性别:{' '}
              {!userInfo.gender
                ? '未知'
                : userInfo.gender === 1
                ? '男性'
                : '女性'}
            </Text>
          </View>
        </View>
        <AtButton onClick={handleGetUserInfo}>获取用户信息</AtButton>
        <AtButton
          className="gap"
          onClick={() =>
            getUserProfile({ lang: 'zh_CN', desc: '仅作为小程序展示使用' })
          }
        >
          获取用户信息(包含敏感)
        </AtButton>
        <AtRadio
          options={transferOptions(userInfo)}
          value={MOCK}
          onClick={console.log}
        />
      </DocPage>
    </>
  );
};
