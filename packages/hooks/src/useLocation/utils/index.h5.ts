import { isUndef } from '@taro-hooks/shared';
import { generateGeneralFail } from '../../utils/tool';
import type {
  GetLocation,
  OnLocationChange,
  OffLocationChange,
  OnLocationChangeError,
  OffLocationChangeError,
} from '../';
import type { ExcludeSuccess } from '../../type';

const LOCATIONCHANGEMAP = {};

function canIUseLocation(): boolean {
  return navigator && 'geolocation' in navigator;
}

function mapCoordsToPoints(
  coords: GeolocationCoordinates,
): ExcludeSuccess<Taro.getLocation.SuccessCallbackResult> {
  return {
    latitude: coords.latitude,
    longitude: coords.longitude,
    speed: coords.speed ?? 0,
    accuracy: coords.accuracy,
    altitude: coords.altitude ?? 0,
    verticalAccuracy: coords.altitudeAccuracy ?? 0,
    horizontalAccuracy: coords.altitudeAccuracy ?? 0,
  };
}

export const getLocation: GetLocation = ({
  success,
  fail,
  altitude = false,
  highAccuracyExpireTime = 3000,
  isHighAccuracy = false,
  type = 'wgs84',
}) => {
  if (!canIUseLocation()) {
    const result = generateGeneralFail(
      'getLocation',
      'not support in u browser',
    );
    fail?.(result);
    return Promise.reject(result);
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const result = {
          ...mapCoordsToPoints(coords),
          errMsg: 'getLocation: success',
        };
        success?.(result);
        resolve(result);
      },
      (error) => {
        const result = generateGeneralFail('getLocation', error.message);
        fail?.(result);
        reject(result);
      },
      {
        enableHighAccuracy: isHighAccuracy,
        timeout: highAccuracyExpireTime,
      },
    );
  });
};

export const onLocationChange: OnLocationChange = (callback) => {
  if (!canIUseLocation()) {
    throw new Error(
      generateGeneralFail(
        'onLocationChange',
        'not support in u browser',
      ).errMsg,
    );
  }

  const id = navigator.geolocation.watchPosition(
    ({ coords }) => {
      callback?.(mapCoordsToPoints(coords));
    },
    (error) => {
      throw new Error(error.message);
    },
  );

  LOCATIONCHANGEMAP[id] = callback;
};

export const onLocationChangeError: OnLocationChangeError = (callback) => {
  if (!canIUseLocation()) {
    throw new Error(
      generateGeneralFail(
        'onLocationChangeError',
        'not support in u browser',
      ).errMsg,
    );
  }

  const id = navigator.geolocation.watchPosition(
    () => {},
    ({ code }) => {
      callback?.({ errCode: code });
    },
  );

  LOCATIONCHANGEMAP[id] = callback;
};

export const offLocationChange: OffLocationChange = (callback) => {
  const findOffId = Object.entries(LOCATIONCHANGEMAP).find(
    ([, excutor]) => excutor === callback,
  )?.[0];

  if (!canIUseLocation() || isUndef(findOffId)) {
    throw new Error(
      generateGeneralFail(
        'offLocationChange',
        'not support in u browser',
      ).errMsg,
    );
  }

  navigator.geolocation.clearWatch(Number(findOffId));
};

export const offLocationChangeError: OffLocationChangeError = (callback) => {
  const findOffId = Object.entries(LOCATIONCHANGEMAP).find(
    ([, excutor]) => excutor === callback,
  )?.[0];

  if (!canIUseLocation() || isUndef(findOffId)) {
    callback?.({ errCode: 0 });
    throw new Error(
      generateGeneralFail(
        'offLocationChange',
        'not support in u browser',
      ).errMsg,
    );
  }
  try {
    navigator.geolocation.clearWatch(Number(findOffId));
  } catch (e) {
    callback?.({ errCode: 0 });
  }
};
