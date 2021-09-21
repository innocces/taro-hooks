import {
  showTabBar,
  hideTabBar,
  showTabBarRedDot,
  hideTabBarRedDot,
  setTabBarStyle,
  setTabBarBadge,
  removeTabBarBadge,
  General,
  setTabBarItem,
} from '@tarojs/taro';
import { typeOf } from '../utils/tool';
import { useCallback } from 'react';

export type Result = General.CallbackResult & { data?: unknown };

export type TSetTabBarVisible = (
  visible: boolean,
  animation?: boolean,
) => Promise<General.CallbackResult>;

export type TSetRedDotVisible = (
  visible: boolean,
  indexList: number[],
) => Promise<Result>;

export interface ISetBadgeVisibleOptionItem {
  index: number;
  text: string;
}
export type TSetBadgeVisible = (
  indexList: number[] | ISetBadgeVisibleOptionItem[],
) => Promise<Result>;

export interface ISetTabBarItemOption {
  index: number;
  iconPath?: string;
  selectedIconPath?: string;
  text?: string;
}
export type TSetTabBarItem = (
  itemList: ISetTabBarItemOption[],
) => Promise<Result>;

export interface ISetTabBarStyleOption {
  backgroundColor?: string;
  borderStyle?: 'black' | 'white';
  color?: string;
  selectedColor?: string;
}
export type TSetTabBarStyle = (
  option: ISetTabBarStyleOption,
) => Promise<General.CallbackResult>;

function useTabBar(): {
  setTabBarVisible: TSetTabBarVisible;
  setRedDotVisible: TSetRedDotVisible;
  setBadgeVisible: TSetBadgeVisible;
  setTabBarItem: TSetTabBarItem;
  setTabBarStyle: TSetTabBarStyle;
} {
  const setTabBarVisible = useCallback<TSetTabBarVisible>(
    (visible = false, animation = false) => {
      return new Promise((resolve, reject) => {
        if (typeof visible !== 'boolean') {
          reject({ errMsg: 'setTabBarVisible: fail' });
        } else {
          try {
            const setTabBarVisibleMethod = visible ? showTabBar : hideTabBar;
            setTabBarVisibleMethod({
              animation,
              success: resolve,
              fail: reject,
            });
          } catch (e) {
            reject({ errMsg: 'setTabBarVisible: fail', data: e });
          }
        }
      });
    },
    [],
  );
  const setRedDotVisible = useCallback<TSetRedDotVisible>(
    (visible, indexList = []) => {
      return new Promise(async (resolve, reject) => {
        const validIndexList =
          indexList.filter((v) => typeof v === 'number') || [];
        if (
          !Array.isArray(indexList) ||
          !validIndexList.length ||
          typeof visible !== 'boolean'
        ) {
          reject({ errMsg: 'setRedDotVisible: fail' });
        } else {
          try {
            const setRedDotVisibleMethod = visible
              ? showTabBarRedDot
              : hideTabBarRedDot;
            const successIndexList = [];
            for await (let index of validIndexList) {
              try {
                await setRedDotVisibleMethod({ index });
                successIndexList.push(index);
              } catch (e) {
                console.log({
                  errMsg: `setRedDotVisible-${index}: fail`,
                  data: e,
                });
              }
            }
            resolve({ errMsg: 'setRedDotVisible: ok', data: successIndexList });
          } catch (e) {
            reject({ errMsg: 'setRedDotVisible: fail', data: e });
          }
        }
      });
    },
    [],
  );
  const setBadgeVisible = useCallback<TSetBadgeVisible>((indexList = []) => {
    return new Promise(async (resolve, reject) => {
      const isSet = (indexList as []).every((v) => typeof v !== 'number');
      const validIndexList = (indexList as []).filter((v) =>
        !isSet ? typeof v === 'number' : typeOf(v, 'Object'),
      );
      if (!Array.isArray(indexList) || !validIndexList.length) {
        reject({ errMsg: 'setBadgeVisible: fail' });
      } else {
        try {
          const successIndexList = [];
          for await (let indexOrOption of validIndexList) {
            const index = isSet
              ? (indexOrOption as ISetBadgeVisibleOptionItem).index
              : indexOrOption;
            try {
              if (isSet) {
                await setTabBarBadge({
                  ...(indexOrOption as ISetBadgeVisibleOptionItem),
                });
              } else {
                await removeTabBarBadge({ index: indexOrOption });
              }
              successIndexList.push(index);
            } catch (e) {
              console.log({
                errMsg: `setBadgeVisible-${index}: fail`,
                data: e,
              });
            }
          }
          resolve({ errMsg: 'setBadgeVisible: ok', data: successIndexList });
        } catch (e) {
          reject({ errMsg: 'setBadgeVisible: fail', data: e });
        }
      }
    });
  }, []);
  const setTabBarItemAsync = useCallback<TSetTabBarItem>((itemList = []) => {
    return new Promise(async (resolve, reject) => {
      const validIndexList =
        itemList.filter(
          (v) => typeOf(v, 'Object') && typeof v.index === 'number',
        ) || [];
      if (!Array.isArray(itemList) || !validIndexList.length) {
        reject({ errMsg: 'setTabBarItem: fail' });
      } else {
        try {
          const successIndexList = [];
          for await (let singleOption of validIndexList) {
            try {
              await setTabBarItem({ ...singleOption });
              successIndexList.push(singleOption.index);
            } catch (e) {
              console.log({
                errMsg: `setTabBarItem-${singleOption.index}: fail`,
                data: e,
              });
            }
          }
          resolve({ errMsg: 'setTabBarItem: ok', data: successIndexList });
        } catch (e) {
          reject({ errMsg: 'setTabBarItem: fail', data: e });
        }
      }
    });
  }, []);
  const setTabBarStyleAsync = useCallback<TSetTabBarStyle>((option = {}) => {
    return new Promise((resolve, reject) => {
      try {
        setTabBarStyle({
          ...option,
          success: resolve,
          fail: reject,
        });
      } catch (e) {
        reject({ errMsg: 'setTabBarStyle: fail', data: e });
      }
    });
  }, []);
  return {
    setTabBarVisible,
    setRedDotVisible,
    setBadgeVisible,
    setTabBarItem: setTabBarItemAsync,
    setTabBarStyle: setTabBarStyleAsync,
  };
}

export default useTabBar;
