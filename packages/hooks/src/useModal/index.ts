import { showModal, General } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';

export interface ModalOption {
  title?: string;
  content?: string;
  mask?: boolean;
  cancelColor?: string;
  cancelText?: string;
  confirmColor?: string;
  confirmText?: string;
  showCancel?: boolean;
}

export type ShowModal = (
  option?: ModalOption,
) => Promise<General.CallbackResult>;

function useModal(option?: ModalOption): [ShowModal] {
  const initialOption = useRef<ModalOption>();

  useEffect(() => {
    initialOption.current = option;
  }, [option]);

  const showModalAsync = useCallback<ShowModal>(
    (option?: ModalOption) => {
      return new Promise((resolve, reject) => {
        try {
          if (!option && !initialOption.current) {
            console.warn('please provide a option');
            return reject(new Error('please provide a option'));
          } else {
            const options = Object.assign(
              {},
              initialOption.current || {},
              option || {},
            );
            showModal({
              ...options,
              success: resolve,
              fail: reject,
            }).catch(reject);
          }
        } catch (e) {
          reject(e);
        }
      });
    },
    [initialOption],
  );

  return [showModalAsync];
}

export default useModal;
