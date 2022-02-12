import { UserInfo, getUserInfo, getUserProfile } from '@tarojs/taro';
import type {
  getUserInfo as getUserInfoNamespace,
  getUserProfile as getUserProfileNamespace,
} from '@tarojs/taro';
import { useCallback, useState } from 'react';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

export interface IUserInfo extends Partial<UserInfo> {
  rawData?: string;
  signature?: string;
  encryptedData?: string;
  iv?: string;
  cloudID?: string;
}

export type TLang = 'en' | 'zh_CN' | 'zh_TW';

export interface IOption {
  withCredentials?: boolean;
  lang?: TLang;
}

export interface IProfileOption {
  lang?: TLang;
  desc: string;
}

export type INormalAction = (
  option?: IOption,
) => Promise<IUserInfo | TaroGeneral.CallbackResult>;

export type IProfileAction = (
  option: IProfileOption,
) => Promise<IUserInfo | TaroGeneral.CallbackResult>;

const INITOPTION: IOption = { withCredentials: false, lang: 'en' };

function useUserInfo(): [
  IUserInfo | undefined,
  { getUserInfo: INormalAction; getUserProfile: IProfileAction },
] {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  const env = useEnv();

  const combineUserInfo = useCallback(
    (
      info:
        | getUserInfoNamespace.SuccessCallbackResult
        | getUserProfileNamespace.SuccessCallbackResult,
    ): IUserInfo => {
      const { userInfo, rawData, signature, encryptedData, iv, cloudID } =
        info || {};
      const painInfo = Object.fromEntries(
        Object.entries({
          rawData,
          signature,
          encryptedData,
          iv,
          cloudID,
        }).filter((v) => v[1]),
      );
      const finallyUserInfo = {
        ...userInfo,
        ...painInfo,
      };
      setUserInfo(finallyUserInfo);
      return finallyUserInfo;
    },
    [],
  );

  const getUserInfoAsync = useCallback<INormalAction>(
    (option = INITOPTION) => {
      return new Promise((resolve, reject) => {
        if (env === ENV_TYPE.WEAPP) {
          try {
            getUserInfo({
              ...option,
              success: (res) => {
                const info = combineUserInfo(res);
                resolve(info);
              },
              fail: reject,
            }).catch((e) => reject({ errMsg: 'getUserInfo: fail', data: e }));
          } catch (e) {
            reject({ errMsg: 'getUserInfo: fail', data: e });
          }
        } else {
          reject({ errMsg: 'getUserInfo: fail' });
        }
      });
    },
    [combineUserInfo, env],
  );

  const getUserProfileAsync = useCallback<IProfileAction>(
    (option) => {
      return new Promise((resolve, reject) => {
        if (env === ENV_TYPE.WEAPP) {
          try {
            getUserProfile({
              ...option,
              success: (res) => {
                const info = combineUserInfo(res);
                resolve(info);
              },
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'getUserProfile: fail', data: e });
          }
        } else {
          reject({ errMsg: 'getUserProfile: fail' });
        }
      });
    },
    [combineUserInfo, env],
  );

  return [
    userInfo,
    { getUserInfo: getUserInfoAsync, getUserProfile: getUserProfileAsync },
  ];
}

export default useUserInfo;
