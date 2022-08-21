import {
  createMapContext,
  useTaroState,
  useReady,
  useTaroEffect,
} from '@tarojs/taro';
import { isNumber, ISREACT } from '@taro-hooks/shared';
import usePromise from '../utils/useActivePromise';

import type { MapContext } from '@tarojs/taro';
import type {
  WithUndefind,
  PromiseOptionalAction,
  PromiseParamsAction,
  PromiseAction,
  ExcludeOption,
  UnionResult,
} from '../type';

export type Marker = MapContext.AddMarkersOption['markers'];

export type GetSuccessCallbackResult = {
  center: UnionResult<MapContext.GetCenterLocationSuccessCallbackResult>;
  region: UnionResult<MapContext.GetRegionSuccessCallbackResult>;
  rotate: UnionResult<MapContext.GetRotateSuccessCallbackResult>;
  scale: UnionResult<MapContext.GetScaleSuccessCallbackResult>;
  skew: UnionResult<MapContext.GetSkewSuccessCallbackResult>;
};

export type Get = PromiseOptionalAction<string, GetSuccessCallbackResult>;

export type Open = PromiseAction<ExcludeOption<MapContext.OpenMapAppOption>>;

export type Include = PromiseParamsAction<
  (points: MapContext.MapPosition[], padding?: number[]) => void
>;

export type MoveTo = PromiseOptionalAction<
  ExcludeOption<MapContext.MoveToLocationOption>
>;

export type Translate = PromiseAction<
  ExcludeOption<MapContext.TranslateMarkerOption>
>;

export type ToggleMarkers = PromiseParamsAction<
  (markers: Marker | number[], clear?: boolean) => void
>;

function useMap<R = TaroGeneral.IAnyObject>(
  mapId: string,
  component?: R,
): [
  WithUndefind<MapContext>,
  {
    get: Get;
    open: Open;
    include: Include;
    moveTo: MoveTo;
    translate: Translate;
    toggleMarkers: ToggleMarkers;
  },
] {
  const [mapContext, setMapContext] = useTaroState<MapContext>();
  const [, forceUpdate] = useTaroState<{}>({});

  useReady(() => {
    setMapContext(
      component ? createMapContext(mapId, component) : createMapContext(mapId),
    );
  });

  useTaroEffect(() => {
    if (mapContext && ISREACT) {
      forceUpdate({});
    }
  }, [mapContext]);

  const getCenterAsync = usePromise<
    ExcludeOption<MapContext.GetCenterLocationOption>,
    MapContext.GetCenterLocationSuccessCallbackResult
  >('getCenterLocation', mapContext);
  const getRegionAsync = usePromise<
    {},
    MapContext.GetRegionSuccessCallbackResult
  >('getRegion', mapContext);
  const getRotateAsync = usePromise<
    {},
    MapContext.GetRotateSuccessCallbackResult
  >('getRotate', mapContext);
  const getScaleAsync = usePromise<
    {},
    MapContext.GetScaleSuccessCallbackResult
  >('getScale', mapContext);
  const getSkewAsync = usePromise<{}, MapContext.GetSkewSuccessCallbackResult>(
    'getSkew',
    mapContext,
  );

  const get: Get = (iconPath) => {
    const getCenterLocationOption = iconPath ? { iconPath } : {};
    return Promise.all([
      getCenterAsync(getCenterLocationOption),
      getRegionAsync(),
      getRotateAsync(),
      getScaleAsync(),
      getSkewAsync(),
    ]).then(([center, region, rotate, scale, skew]) => {
      return {
        center,
        region,
        rotate,
        scale,
        skew,
      };
    });
  };

  const open: Open = usePromise<ExcludeOption<MapContext.OpenMapAppOption>>(
    'openMapApp',
    mapContext,
  );

  const includeAsync = usePromise<
    ExcludeOption<MapContext.IncludePointsOption>
  >('includePoints', mapContext);

  const include: Include = (points, padding = []) => {
    return includeAsync({ points, padding });
  };

  const moveTo: MoveTo = usePromise<
    ExcludeOption<MapContext.MoveToLocationOption>
  >('moveToLocation', mapContext);

  const translate: Translate = usePromise<
    ExcludeOption<MapContext.TranslateMarkerOption>
  >('translateMarker', mapContext);

  const addMarkersAsync = usePromise<
    ExcludeOption<MapContext.AddMarkersOption>
  >('addMarkers', mapContext);
  const removeMarkersAsync = usePromise<
    ExcludeOption<MapContext.RemoveMarkersOption>
  >('removeMarkers', mapContext);

  const toggleMarkers: ToggleMarkers = (markers, clear = false) => {
    if (Array.isArray(markers) && (markers as number[]).every(isNumber)) {
      // @ts-ignore (taro markers not safe for miniprogram, see: https://developers.weixin.qq.com/miniprogram/dev/component/map.html#marker )
      return removeMarkersAsync({ markerIds: markers as number[] });
    }
    const option = {
      markers: markers as Marker,
      clear,
    };
    return addMarkersAsync(option);
  };

  return [
    mapContext,
    {
      get,
      open,
      include,
      moveTo,
      translate,
      toggleMarkers,
    },
  ];
}

export default useMap;
