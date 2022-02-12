import {
  showNavigationBarLoading,
  hideNavigationBarLoading,
  setNavigationBarColor,
  setNavigationBarTitle,
  hideHomeButton,
} from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';
import useEnv from '../useEnv';
import { ENV_TYPE } from '../constant';

export interface ISetColorOption {
  backgroundColor: string;
  frontColor: string;
  animation?: boolean;
}

export interface Option extends Partial<ISetColorOption> {
  title?: string;
  loading?: boolean;
  hideHomeButton?: boolean;
}

export type Action = () => Promise<TaroGeneral.CallbackResult>;
export type SetTitle = (title: string) => Promise<TaroGeneral.CallbackResult>;
export type SetColor = (
  option: ISetColorOption,
) => Promise<TaroGeneral.CallbackResult>;

export interface IAction {
  toggleLoading: Action;
  setTitle: SetTitle;
  setColor: SetColor;
  hideHomeButton: Action;
}

function useNavigationBar(option?: Option): [boolean, IAction] {
  const initialOption = useRef<Option>({});
  const env = useEnv();

  useEffect(() => {
    if (option && env && env !== ENV_TYPE.WEB) {
      const PromiseArray = [];
      const {
        loading,
        title,
        frontColor,
        backgroundColor,
        animation,
        hideHomeButton,
      } = option;
      loading && PromiseArray.push(toggleLoadingAsync());
      title && PromiseArray.push(setTitleAsync(title));
      hideHomeButton && PromiseArray.push(hideHomeButtonAsync());
      frontColor &&
        backgroundColor &&
        PromiseArray.push(
          setColorAsync({ backgroundColor, frontColor, animation }),
        );
      PromiseArray.length &&
        Promise.all(PromiseArray).finally(() => {
          initialOption.current = option;
        });
    }
  }, [option, env]);

  const toggleLoadingAsync = useCallback<Action>(() => {
    return new Promise((resolve, reject) => {
      try {
        let Action = showNavigationBarLoading,
          option = { loading: true };
        if (initialOption.current?.loading) {
          Action = hideNavigationBarLoading;
          option = { ...initialOption.current, loading: false };
        }
        Action({
          success: (res) => {
            initialOption.current = option;
            resolve(res);
          },
          fail: reject,
        });
      } catch (e) {
        reject(e);
      }
    });
  }, [initialOption]);

  const setTitleAsync = useCallback<SetTitle>((title) => {
    return new Promise((resolve, reject) => {
      try {
        if (!title) {
          throw new Error('you must provide a title');
        }

        setNavigationBarTitle({
          title,
          success: (res) => {
            initialOption.current = {
              ...initialOption.current,
              title,
            };
            resolve(res);
          },
        }).catch(reject);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const setColorAsync = useCallback<SetColor>((option) => {
    return new Promise((resolve, reject) => {
      try {
        if (!option.backgroundColor || !option.frontColor) {
          throw new Error('you must provide backgroundColor or frontColor');
        }

        setNavigationBarColor({
          ...option,
          success: (res) => {
            const { frontColor, backgroundColor, animation = false } = option;
            initialOption.current = {
              ...initialOption.current,
              frontColor,
              backgroundColor,
              animation,
            };
            resolve(res);
          },
          fail: reject,
        } as setNavigationBarColor.Option);
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  const hideHomeButtonAsync = useCallback<Action>(() => {
    return new Promise((resolve, reject) => {
      try {
        hideHomeButton({
          success: (res) => {
            initialOption.current = {
              ...initialOption.current,
              hideHomeButton: true,
            };
            resolve(res);
          },
          fail: reject,
        });
      } catch (e) {
        reject(e);
      }
    });
  }, []);

  return [
    initialOption.current?.loading || false,
    {
      toggleLoading: toggleLoadingAsync,
      hideHomeButton: hideHomeButtonAsync,
      setTitle: setTitleAsync,
      setColor: setColorAsync,
    },
  ];
}

export default useNavigationBar;
