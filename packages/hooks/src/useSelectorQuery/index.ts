import { createSelectorQuery } from '@tarojs/taro';
import { useRef } from '@taro-hooks/core';
import type { NodesRef, SelectorQuery } from '@tarojs/taro';
import type { PromiseParamsAction, PromiseAction } from '../type';
import { generateGeneralFail } from '../utils/tool';

export type GetBoundingClientRect = PromiseParamsAction<
  (selector: string, all?: boolean) => void,
  NodesRef.BoundingClientRectCallbackResult
>;

export type GetContext = PromiseAction<string, NodesRef.ContextCallbackResult>;

export type GetFields = PromiseParamsAction<
  (selector: string, fields: NodesRef.Fields) => void,
  TaroGeneral.IAnyObject
>;

export type GetNode = PromiseAction<string, NodesRef.NodeCallbackResult>;

export type GetScrollOffset = PromiseAction<
  string,
  NodesRef.ScrollOffsetCallbackResult
>;

function useSelectorQuery(): [
  SelectorQuery,
  {
    querySelector: SelectorQuery['select'];
    querySelectorAll: SelectorQuery['selectAll'];
    selectViewport: SelectorQuery['selectViewport'];
    in: SelectorQuery['in'];
    exec: SelectorQuery['exec'];
    getBoundingClientRect: GetBoundingClientRect;
    getContext: GetContext;
    getFields: GetFields;
    getNode: GetNode;
    getScrollOffset: GetScrollOffset;
  },
] {
  const query = useRef<SelectorQuery>(createSelectorQuery());

  const querySelector = (selector: string) => query.current.select(selector);
  const querySelectorAll = (selector: string) =>
    query.current.selectAll(selector);

  function queryWithMethod<
    T = TaroGeneral.IAnyObject,
    R = TaroGeneral.IAnyObject,
  >(method: string, selector: string, all?: boolean, params?: R) {
    return new Promise<T>((resolve, reject) => {
      try {
        const withQuery = all ? querySelectorAll : querySelector;
        if (params) {
          withQuery(selector)[method](params, resolve).exec();
        } else {
          withQuery(selector)[method](resolve).exec();
        }
      } catch (e) {
        reject(
          generateGeneralFail(`selectorQuery.${method}`, e.errMsg || e.message),
        );
      }
    });
  }

  const getBoundingClientRect: GetBoundingClientRect = (
    selector: string,
    all?: boolean,
  ) =>
    queryWithMethod<NodesRef.BoundingClientRectCallbackResult>(
      'boundingClientRect',
      selector,
      all,
    );

  const getContext: GetContext = (selector: string) =>
    queryWithMethod<NodesRef.ContextCallbackResult>('context', selector);

  const getFields = (selector, fields) =>
    queryWithMethod('fields', selector, false, fields);

  const getNode: GetNode = (selector) =>
    queryWithMethod<NodesRef.NodeCallbackResult>('node', selector);

  const getScrollOffset: GetScrollOffset = (selector) =>
    queryWithMethod<NodesRef.ScrollOffsetCallbackResult>(
      'scrollOffset',
      selector,
    );

  return [
    query.current,
    {
      querySelector,
      querySelectorAll,
      selectViewport: query.current.selectViewport,
      in: query.current.in,
      exec: query.current.exec,
      getBoundingClientRect,
      getContext,
      getFields,
      getNode,
      getScrollOffset,
    },
  ];
}

export default useSelectorQuery;
