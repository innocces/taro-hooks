import { useCallback, useRef } from 'react';

import {
  createSelectorQuery,
  General,
  NodesRef,
  SelectorQuery,
} from '@tarojs/taro';

export type getBoundingClientRectType = (
  selector: string,
  all?: boolean,
) => Promise<NodesRef.BoundingClientRectCallbackResult>;

export type getContextType = (selector: string) => Promise<General.IAnyObject>;

export type getFieldsType = (
  selector: string,
  fields: NodesRef.Fields,
) => Promise<General.IAnyObject>;

export type getNodeType = (selector: string) => Promise<General.IAnyObject>;

export type getScrollOffsetType = (
  selector: string,
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
    (selector, all) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            const select = all ? querySelectorAll : querySelector;
            select(selector).boundingClientRect(resolve).exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  const getContext = useCallback<getContextType>(
    (selector) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            querySelector(selector)
              .context((res) => resolve(res.context))
              .exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  const getFields = useCallback<getFieldsType>(
    (selector, fields) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            querySelector(selector).fields(fields, resolve).exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  const getNode = useCallback<getNodeType>(
    (selector) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            querySelector(selector)
              .node((res) => resolve(res.node))
              .exec();
          } catch (e) {
            reject(e);
          }
        }
      });
    },
    [query],
  );

  const getScrollOffset = useCallback<getScrollOffsetType>(
    (selector) => {
      return new Promise((resolve, reject) => {
        if (!selector) {
          reject({});
        } else {
          try {
            querySelector(selector).scrollOffset(resolve).exec();
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
