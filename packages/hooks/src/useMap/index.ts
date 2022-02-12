import { createMapContext, MapContext } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import { ENV_TYPE } from '../constant';
import useEnv from '../useEnv';

export type IMapContext = MapContext | undefined;
export type ICreateAction = (
  mapId: string,
  scope?: Record<string, any>,
) => IMapContext;

export type IGetCenterLocationAction = () => Promise<
  MapContext.GetCenterLocationSuccessCallbackResult | TaroGeneral.CallbackResult
>;

export type IGetRegionAction = () => Promise<
  MapContext.GetRegionSuccessCallbackResult | TaroGeneral.CallbackResult
>;

export type IGetRotateAction = () => Promise<
  MapContext.GetRotateSuccessCallbackResult | TaroGeneral.CallbackResult
>;

export type IGetScaleAction = () => Promise<
  MapContext.GetScaleSuccessCallbackResult | TaroGeneral.CallbackResult
>;

export type IGetSkewAction = () => Promise<
  MapContext.GetSkewSuccessCallbackResult | TaroGeneral.CallbackResult
>;

export type IIncludePointsAction = (
  points: MapContext.MapPostion[],
) => Promise<TaroGeneral.CallbackResult>;

export type IMoveToLocation = (
  options?: Pick<MapContext.MoveToLocationOption, 'longitude' | 'latitude'>,
) => Promise<TaroGeneral.CallbackResult>;

export type ITranslatMarker = (
  options: Pick<
    MapContext.TranslateMarkerOption,
    | 'animationEnd'
    | 'autoRotate'
    | 'destination'
    | 'duration'
    | 'markerId'
    | 'rotate'
  >,
) => Promise<TaroGeneral.CallbackResult>;

export interface IAction {
  create: ICreateAction;
  getCenterLocation: IGetCenterLocationAction;
  getRegion: IGetRegionAction;
  getRotate: IGetRotateAction;
  getScale: IGetScaleAction;
  getSkew: IGetSkewAction;
  includePoints: IIncludePointsAction;
  moveToLocation: IMoveToLocation;
  translateMarker: ITranslatMarker;
}

function useMap<R = Record<string, any>>(
  mapId: string,
  scope?: R,
): [IMapContext, IAction] {
  const env = useEnv();
  const [map, setMap] = useState<IMapContext>();

  useEffect(() => {
    if (env && mapId && env === ENV_TYPE.WEAPP) {
      const context = create(mapId, scope);
      setMap(context);
    }
  }, [env]);

  const create = useCallback<ICreateAction>(
    (mapId, scope) => {
      if (env && mapId && env === ENV_TYPE.WEAPP) {
        return createMapContext(mapId, scope);
      }
    },
    [env],
  );

  const getCenterLocationAsync = useCallback<IGetCenterLocationAction>(() => {
    return new Promise((resolve, reject) => {
      if (env && env === ENV_TYPE.WEAPP && map) {
        map.getCenterLocation({
          success: resolve,
          fail: reject,
        });
      } else {
        reject({ errMsg: 'getCenterLocation: failed' });
      }
    });
  }, [env, map]);

  const getRegionAsync = useCallback<IGetRegionAction>(() => {
    return new Promise((resolve, reject) => {
      if (env && env === ENV_TYPE.WEAPP && map) {
        map.getRegion({
          success: resolve,
          fail: reject,
        });
      } else {
        reject({ errMsg: 'getRegion: failed' });
      }
    });
  }, [env, map]);

  const getScaleAsync = useCallback<IGetScaleAction>(() => {
    return new Promise((resolve, reject) => {
      if (env && env === ENV_TYPE.WEAPP && map) {
        map.getScale({
          success: resolve,
          fail: reject,
        });
      } else {
        reject({ errMsg: 'getScale: failed' });
      }
    });
  }, [env, map]);

  const getRotateAsync = useCallback<IGetRotateAction>(() => {
    return new Promise((resolve, reject) => {
      if (env && env === ENV_TYPE.WEAPP && map) {
        map.getRotate({
          success: resolve,
          fail: reject,
        });
      } else {
        reject({ errMsg: 'getRotate: failed' });
      }
    });
  }, [env, map]);

  const getSkewAsync = useCallback<IGetSkewAction>(() => {
    return new Promise((resolve, reject) => {
      if (env && env === ENV_TYPE.WEAPP && map) {
        map.getSkew({
          success: resolve,
          fail: reject,
        });
      } else {
        reject({ errMsg: 'getSkew: failed' });
      }
    });
  }, [env, map]);

  const includePointsAsync = useCallback<IIncludePointsAction>(
    (points = []) => {
      return new Promise((resolve, reject) => {
        if (env && env === ENV_TYPE.WEAPP && map) {
          map.includePoints({
            points,
            success: resolve,
            fail: reject,
          });
        } else {
          reject({ errMsg: 'includePoints: failed' });
        }
      });
    },
    [env, map],
  );

  const moveToLocationAsync = useCallback<IMoveToLocation>(
    (options = {}) => {
      return new Promise((resolve, reject) => {
        if (env && env === ENV_TYPE.WEAPP && map) {
          map.moveToLocation({
            ...options,
            success: resolve,
            fail: reject,
          });
        } else {
          reject({ errMsg: 'moveToLocation: failed' });
        }
      });
    },
    [env, map],
  );

  const translateMarkerAsync = useCallback<ITranslatMarker>(
    (options) => {
      return new Promise((resolve, reject) => {
        if (env && env === ENV_TYPE.WEAPP && map) {
          map.translateMarker({
            ...(options || {}),
            success: resolve,
            fail: reject,
          });
        } else {
          reject({ errMsg: 'translateMarker: failed' });
        }
      });
    },
    [env, map],
  );

  return [
    map,
    {
      create,
      getCenterLocation: getCenterLocationAsync,
      getRegion: getRegionAsync,
      getScale: getScaleAsync,
      getRotate: getRotateAsync,
      getSkew: getSkewAsync,
      includePoints: includePointsAsync,
      moveToLocation: moveToLocationAsync,
      translateMarker: translateMarkerAsync,
    },
  ];
}

export default useMap;
