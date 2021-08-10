import { General } from '@tarojs/taro';

const checkLocationAvailable = () => {
  return navigator && 'geolocation' in navigator;
};

export interface IPositionOption {
  isHighAccuracy?: boolean;
  highAccuracyExpireTime?: number;
}

export type IGeolocationCoordinates = GeolocationCoordinates & {
  horizontalAccuracy: number;
  verticalAccuracy: number;
};

const polyfillCoords = (
  coords: GeolocationCoordinates,
): IGeolocationCoordinates => {
  return {
    horizontalAccuracy: 0,
    verticalAccuracy: 0,
    accuracy: coords.accuracy,
    altitude: coords.altitude,
    altitudeAccuracy: coords.altitudeAccuracy,
    heading: coords.heading,
    longitude: coords.longitude,
    speed: coords.speed,
    latitude: coords.latitude,
  };
};

const computedPayload = (options?: IPositionOption): PositionOptions => {
  const {
    isHighAccuracy: enableHighAccuracy = false,
    highAccuracyExpireTime: timeout,
  } = options || {};
  const payload: PositionOptions = {
    enableHighAccuracy,
  };
  if (timeout) {
    payload.timeout = timeout;
  }
  return payload;
};

export const getLocation = (
  options?: IPositionOption,
): Promise<IGeolocationCoordinates> => {
  return new Promise((resolve, reject) => {
    if (!checkLocationAvailable()) {
      reject({
        errMsg: 'geolocation is not support',
      });
    } else {
      try {
        const payload: PositionOptions = computedPayload(options);
        navigator.geolocation.getCurrentPosition(
          (geolocationCoordinates) =>
            resolve(polyfillCoords(geolocationCoordinates.coords)),
          (err) => reject({ errMsg: err.message }),
          payload,
        );
      } catch (e) {
        reject({ errMsg: e.message });
      }
    }
  });
};

export type INormalCallback = (result: General.CallbackResult) => void;

export const onLocationChange = (
  callback: INormalCallback,
  options?: IPositionOption,
) => {
  return new Promise((resolve, reject) => {
    if (!checkLocationAvailable()) {
      reject({
        errMsg: 'geolocation is not support',
      });
    } else {
      try {
        const payload: PositionOptions = computedPayload(options);
        const id = navigator.geolocation.watchPosition(
          (geolocationCoordinates) => {
            callback({
              errMsg: 'onLocationChange: ok',
              ...polyfillCoords(geolocationCoordinates.coords),
            });
          },
          (err) => reject({ errMsg: err.message }),
          payload,
        );
        resolve({ errMsg: 'onLocationChange: ok', listenId: id });
      } catch (e) {
        reject({ errMsg: e.message });
      }
    }
  });
};

export const offLocationChange = (id: number) => {
  return new Promise((resolve, reject) => {
    if (!checkLocationAvailable()) {
      reject({
        errMsg: 'geolocation is not support',
      });
    } else {
      try {
        navigator.geolocation.clearWatch(id);
        resolve({ errMsg: 'offLocationChange: ok' });
      } catch (e) {
        reject({ errMsg: e.message });
      }
    }
  });
};
