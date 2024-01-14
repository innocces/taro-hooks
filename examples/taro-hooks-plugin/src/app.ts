import {
  type FC,
  type PropsWithChildren,
  useLayoutEffect,
  useRef,
  useCallback,
} from 'react';
import { useRouter, useEnv, useApp } from 'taro-hooks';
import { ENV_TYPE } from '@tarojs/taro';
import './app.css';

const App: FC<PropsWithChildren> = ({ children }) => {
  const [pageInfo, { navigate }] = useRouter();
  const { setGlobalData } = useApp();
  const env = useEnv();
  const checkParams = useRef<typeof pageInfo.params>();

  const handleCheckNavigate = useCallback(() => {
    const checkQueryField = ['type', 'hook', 'sub', 'function'];
    const pageParams = pageInfo.params;
    // 包含前两个即可
    if (checkQueryField.slice(0, 2).every((v) => pageParams[v])) {
      // 对比两个是否一致
      const isEqual = Object.keys(pageParams).reduce((result, key) => {
        if (!result) {
          return result;
        }

        return pageParams[key] === checkParams.current?.[key];
      }, true);

      if (!isEqual) {
        const path = checkQueryField.reduce(
          (forwardPath, key) => [forwardPath, `/${pageParams[key]}`].join(''),
          '/pages',
        );
        checkParams.current = pageParams;
        navigate(path);
      }
    }
  }, [pageInfo]);

  useLayoutEffect(() => {
    // @ts-ignore
    if (env === ENV_TYPE['WEB'] && CF !== '0') {
      handleCheckNavigate();
    }
  }, [pageInfo.params]);

  useLayoutEffect(() => {
    Object.entries({
      framework: 'React',
      package: 'taro-hooks next',
      basic: 'taro',
    }).forEach((params) => setGlobalData(...params));
  }, []);

  return children;
};

export default App;
