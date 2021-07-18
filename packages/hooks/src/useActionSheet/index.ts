import { showActionSheet, General } from '@tarojs/taro';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface ActionSheetOption {
  itemList: string[];
  itemColor?: string;
  onActionItemTap?: onActionItemTap;
}

export type ShowActionSheet = (
  option?: ActionSheetOption,
) => Promise<General.CallbackResult>;

export type onActionItemTap = (
  tapIndex: number,
  tapItem: string | undefined,
) => any;

function useActionSheet(option?: ActionSheetOption): [ShowActionSheet] {
  const initialOption = useRef<ActionSheetOption>();

  useEffect(() => {
    initialOption.current = option;
  }, [option]);

  const showActionSheetAsync = useCallback<ShowActionSheet>(
    (option?: ActionSheetOption) => {
      return new Promise((resolve, reject) => {
        try {
          if (!option && !initialOption.current) {
            console.warn('please provide a option');
            return reject(new Error('please provide a option'));
          } else {
            const { onActionItemTap, ...options } = Object.assign(
              {},
              initialOption.current || {},
              option || {},
            ) as ActionSheetOption;
            showActionSheet({
              ...options,
              success: (res) => {
                if (onActionItemTap) {
                  const tapIndex = res.tapIndex;
                  onActionItemTap(
                    tapIndex,
                    options.itemList.find((v, i) => i === tapIndex),
                  );
                }
                resolve(res);
              },
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

  return [showActionSheetAsync];
}

export default useActionSheet;
