/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react';
import { request } from '@tarojs/taro';
import {
  BaseOptions,
  BasePaginatedOptions,
  BaseResult,
  CombineService,
  LoadMoreFormatReturn,
  LoadMoreOptions,
  LoadMoreOptionsWithFormat,
  LoadMoreParams,
  LoadMoreResult,
  OptionsWithFormat,
  PaginatedFormatReturn,
  PaginatedOptionsWithFormat,
  PaginatedParams,
  PaginatedResult,
} from './types';
import useAsync from './useAsync';
import useLoadMore from './useLoadMore';
import usePaginated from './usePaginated';

function useRequest<
  R = any,
  P extends any[] = any,
  U = any,
  UU extends U = any,
>(
  service: CombineService<R, P>,
  options: OptionsWithFormat<R, P, U, UU>,
): BaseResult<U, P>;
function useRequest<R = any, P extends any[] = any>(
  service: CombineService<R, P>,
  options?: BaseOptions<R, P>,
): BaseResult<R, P>;

function useRequest<R extends LoadMoreFormatReturn, RR>(
  service: CombineService<RR, LoadMoreParams<R>>,
  options: LoadMoreOptionsWithFormat<R, RR>,
): LoadMoreResult<R>;
function useRequest<R extends LoadMoreFormatReturn, RR extends R>(
  service: CombineService<R, LoadMoreParams<R>>,
  options: LoadMoreOptions<RR>,
): LoadMoreResult<R>;

function useRequest<R = any, Item = any, U extends Item = any>(
  service: CombineService<R, PaginatedParams>,
  options: PaginatedOptionsWithFormat<R, Item, U>,
): PaginatedResult<Item>;
function useRequest<R = any, Item = any, U extends Item = any>(
  service: CombineService<PaginatedFormatReturn<Item>, PaginatedParams>,
  options: BasePaginatedOptions<U>,
): PaginatedResult<Item>;

function useRequest(service: any, options: any = {}) {
  const finalOptions = { ...options };

  const { paginated, loadMore, requestMethod } = finalOptions;

  const paginatedRef = useRef(paginated);
  const loadMoreRef = useRef(loadMore);

  if (paginatedRef.current !== paginated) {
    throw Error('You should not modify the paginated of options');
  }

  if (loadMoreRef.current !== loadMore) {
    throw Error('You should not modify the loadMore of options');
  }

  paginatedRef.current = paginated;
  loadMoreRef.current = loadMore;

  // @ts-ignore
  const fetchProxy = (url, config = {}) =>
    // @ts-ignore
    request({ url, ...config }).then((res: request.SuccessCallbackResult) => {
      return res;
    });

  const finalRequestMethod = requestMethod || fetchProxy;

  let promiseService: () => Promise<any>;
  switch (typeof service) {
    case 'string':
      promiseService = () => finalRequestMethod(service);
      break;
    case 'object':
      const { url, ...rest } = service;
      promiseService = () =>
        requestMethod ? requestMethod(service) : fetchProxy(url, rest);
      break;
    default:
      promiseService = (...args: any[]) =>
        new Promise((resolve, reject) => {
          const s = service(...args);
          let fn = s;
          if (!s.then) {
            switch (typeof s) {
              case 'string':
                fn = finalRequestMethod(s);
                break;
              case 'object':
                const { url, ...rest } = s;
                fn = requestMethod ? requestMethod(s) : fetchProxy(url, rest);
                break;
            }
          }
          fn.then(resolve).catch(reject);
        });
  }

  if (loadMore) {
    return useLoadMore(promiseService, finalOptions);
  }
  if (paginated) {
    return usePaginated(promiseService, finalOptions);
  }
  return useAsync(promiseService, finalOptions);
}

export { useAsync, usePaginated, useLoadMore };

export default useRequest;
