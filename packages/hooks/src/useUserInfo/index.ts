import {
  getUserInfo as taroGetUserInfo,
  getUserProfile as taroGetUserProfile,
} from '@tarojs/taro';
import { useState } from '@taro-hooks/core';
import usePromise from '../usePromise';
import useAuthorize from '../useAuthorize';
import { generateGeneralFail } from '../utils/tool';

import type {
  PromiseOptionalAction,
  ExcludeOption,
  WithUndefind,
} from '../type';

export type GetInfo = PromiseOptionalAction<
  ExcludeOption<Taro.getUserInfo.Option>,
  Taro.getUserInfo.SuccessCallbackResult
>;

export type GetProfile = PromiseOptionalAction<
  ExcludeOption<Taro.getUserProfile.Option>,
  Taro.getUserProfile.SuccessCallbackResult
>;

export type UserInfo = WithUndefind<
  Partial<Taro.getUserInfo.SuccessCallbackResult>
>;

function useUserInfo(): [
  UserInfo,
  { getUserInfo: GetInfo; getUserProfile: GetProfile },
] {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const { get } = useAuthorize();

  const getInfo = usePromise<
    ExcludeOption<Taro.getUserInfo.Option>,
    Taro.getUserInfo.SuccessCallbackResult
  >(taroGetUserInfo);

  const getProfile = usePromise<
    ExcludeOption<Taro.getUserProfile.Option>,
    Taro.getUserProfile.SuccessCallbackResult
  >(taroGetUserProfile);

  const getUserInfo: GetInfo = (options) => {
    return get().then((res) => {
      if (
        (res as Taro.getSetting.SuccessCallbackResult).authSetting[
          'scope.userInfo'
        ]
      ) {
        return getInfo(options).then((res) => {
          setUserInfo(res);
          return res;
        });
      }
      return generateGeneralFail(
        'getUserInfo',
        'please auth scope.userInfo first',
      );
    });
  };

  const getUserProfile: GetProfile = (option) => {
    return getProfile(option).then((res) => {
      setUserInfo(res);
      return res;
    });
  };

  return [userInfo, { getUserInfo, getUserProfile }];
}

export default useUserInfo;
