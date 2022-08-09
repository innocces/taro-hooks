import { scanCode } from '@tarojs/taro';
import usePromise from '../usePromise';

import type { ExcludeOption, PromiseOptionalAction } from '../type';

export type Option = ExcludeOption<Taro.scanCode.Option>;

export type Scan = PromiseOptionalAction<
  Option,
  Taro.scanCode.SuccessCallbackResult
>;

export type CameraScan = PromiseOptionalAction<
  Taro.scanCode.Option['scanType'],
  Taro.scanCode.SuccessCallbackResult
>;

function useScanCode(initialOption: Option = {}): {
  scan: Scan;
  cameraScan: CameraScan;
} {
  const scanAsync = usePromise<Option, Taro.scanCode.SuccessCallbackResult>(
    scanCode,
  );

  const scan: Scan = (option = {}) => {
    return scanAsync({ ...initialOption, ...option });
  };

  const cameraScan: CameraScan = (type) => {
    return scanAsync({
      scanType: type ?? initialOption?.scanType,
      onlyFromCamera: true,
    });
  };

  return { scan, cameraScan };
}

export default useScanCode;
