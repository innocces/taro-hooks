import Taro from '@tarojs/taro';

const useEnv = (): Taro.ENV_TYPE => {
  return Taro.getEnv();
};

export default useEnv;
