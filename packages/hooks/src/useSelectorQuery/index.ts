import { useCallback, useRef } from 'react';

import {
  createSelectorQuery,
  NodesRef,
  PageInstance,
  SelectorQuery,
} from '@tarojs/taro';

export type getBoundingClientRectType = (
  selector: string,
  all?: boolean,
  scope?: PageInstance,
) => Promise<NodesRef.BoundingClientRectCallbackResult>;

export type getContextType = (
  selector: string,
  scope?: PageInstance,
) => Promise<TaroGeneral.IAnyObject>;

export type getFieldsType = (
  selector: string,
  fields: NodesRef.Fields,
  scope?: PageInstance,
) => Promise<TaroGeneral.IAnyObject>;

export type getNodeType = (
  selector: string,
  scope?: PageInstance,
) => Promise<TaroGeneral.IAnyObject>;

export type getScrollOffsetType = (
  selector: string,
  scope?: PageInstance,
) => Promise<NodesRef.ScrollOffsetCallbackResult>;

export interface ISelectorMethod extends SelectorQuery {
  getBoundingClientRect: getBoundingClientRectType;
  getContext: getContextType;
  getFields: getFieldsType;
  getNode: getNodeType;
  getScrollOffset: getScrollOffsetType;
}

function useSelectorQuery(): [SelectorQuery, ISelectorMethod] {
  const query = useRef<SelectorQuery>(createSelectorQuery());

  const querySelector = useCallback(
    (selector: string): NodesRef => {
      return query.current.select(selector);
    },
    [query],
  );

  const querySelectorAll = useCallback(
    (selector: string): NodesRef => {
      return query.current.selectAll(selector);
    },
    [query],
  );

  const getBoundingClientRect = useCallback<getBoundingClientRectType>(
    (selector, all, scope) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            const select = all ? querySelectorAll : querySelector;
            let selectorQuery = select(selector).boundingClientRect(resolve);
            if (scope) {
              selectorQuery = selectorQuery.in(scope);
            }
            selectorQuery.exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  const getContext = useCallback<getContextType>(
    (selector, scope) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            let selectorQuery = querySelector(selector).context((res) =>
              resolve(res.context),
            );
            if (scope) {
              selectorQuery = selectorQuery.in(scope);
            }
            selectorQuery.exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  const getFields = useCallback<getFieldsType>(
    (selector, fields, scope) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            let selectorQuery = querySelector(selector).fields(fields, resolve);
            if (scope) {
              selectorQuery = selectorQuery.in(scope);
            }
            selectorQuery.exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  const getNode = useCallback<getNodeType>(
    (selector, scope) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            let selectorQuery = querySelector(selector).node((res) =>
              resolve(res.node),
            );
            if (scope) {
              selectorQuery = selectorQuery.in(scope);
            }
            selectorQuery.exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  const getScrollOffset = useCallback<getScrollOffsetType>(
    (selector, scope) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            let selectorQuery = querySelector(selector).scrollOffset(resolve);
            if (scope) {
              selectorQuery = selectorQuery.in(scope);
            }
            selectorQuery.exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  return [
    query.current,
    {
      in: query.current.in,
      exec: query.current.exec,
      select: query.current.select,
      selectAll: query.current.selectAll,
      selectViewport: query.current.selectViewport,
      getBoundingClientRect,
      getContext,
      getFields,
      getNode,
      getScrollOffset,
    },
  ];
}

export default useSelectorQuery;
