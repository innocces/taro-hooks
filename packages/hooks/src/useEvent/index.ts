import { eventCenter } from '@tarojs/taro';
import { generateGeneralFail } from '../utils/tool';
import { isSafeEvent, prefixClsEvent, generateCheck } from './utils';
import type { Noop, Void } from '../type';

export type Listen = (eventName: string, ...handlers: Noop[]) => void;

export type Trigger = (eventName: string, ...params: any[]) => void;

function useEvent(namespace: string): {
  set: Listen;
  setOnce: Listen;
  off: Listen;
  clear: Void;
  trigger: Trigger;
} {
  const set: Listen = (eventName, ...handlers) => {
    if (generateCheck(eventName, handlers)) {
      handlers.forEach((handler) => {
        eventCenter.on(prefixClsEvent(namespace, eventName), handler);
      });
    }
  };

  const setOnce: Listen = (eventName, ...handlers) => {
    if (generateCheck(eventName, handlers)) {
      handlers.forEach((handler) => {
        eventCenter.once(prefixClsEvent(namespace, eventName), handler);
      });
    }
  };

  const off: Listen = (eventName, ...handlers) => {
    if (!isSafeEvent(eventName)) {
      generateGeneralFail('EVENT CHANEL', `${eventName} is not valid`);
      return;
    }

    if (!handlers?.length) {
      eventCenter.off(prefixClsEvent(namespace, eventName));
    } else {
      handlers.forEach((handler) => {
        eventCenter.off(prefixClsEvent(namespace, eventName), handler);
      });
    }
  };

  const clear: Void = () => {
    eventCenter.off();
  };

  const trigger: Trigger = (eventName, ...params) => {
    if (!isSafeEvent(eventName)) {
      generateGeneralFail('EVENT CHANEL', `${eventName} is not valid`);
      return;
    }

    eventCenter.trigger(prefixClsEvent(namespace, eventName), ...params);
  };

  return {
    set,
    setOnce,
    off,
    clear,
    trigger,
  };
}

export default useEvent;
