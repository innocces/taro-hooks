import { showActionSheet, General } from '@tarojs/taro';
import { useCallback, useEffect, useRef } from 'react';

export interface ActionSheetOption {
  itemList: string[];
  itemColor?: string;
  onActionItemTap?: onActionItemTap;
}

export type ShowActionSheet = (
  option?: Partial<ActionSheetOption>,
) => Promise<General.CallbackResult>;

export type onActionItemTap = (
  tapIndex: number,
  tapItem: string | undefined,
) => any;

function useActionSheet(
  option?: Partial<ActionSheetOption>,
): [ShowActionSheet] {
  const initialOption = useRef<Partial<ActionSheetOption>>();

  useEffect(() => {
    initialOption.current = option;
  }, [option]);

  const showActionSheetAsync = useCallback<ShowActionSheet>(
    (option?: Partial<ActionSheetOption>) => {
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
            );
            if (!options.itemList) {
              reject({ errMsg: 'showActionSheet: fail' });
            } else {
              showActionSheet({
                ...(options as ActionSheetOption),
                success: (res) => {
                  if (onActionItemTap) {
                    const tapIndex = res.tapIndex;
                    onActionItemTap(
                      tapIndex,
                      (options as ActionSheetOption).itemList.find(
                        (v, i) => i === tapIndex,
                      ),
                    );
                  }
                  resolve(res);
                },
                fail: reject,
              }).catch(reject);
            }
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
