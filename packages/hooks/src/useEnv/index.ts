import Taro from '@tarojs/taro';

function useEnv(): Taro.ENV_TYPE {
  return Taro.getEnv();
}

export default useEnv;
