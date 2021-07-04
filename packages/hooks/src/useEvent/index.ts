import { useCallback, useContext, useReducer } from 'react';
import { context, wrapperEvent } from '../context';
import { typeOf } from '../utils/tool';

export type eventHandler = (...args: any[]) => void;

export interface IEventQueue {
  [_: string]: eventHandler[];
}
export interface IActionAddPayload {
  eventName: string;
  handlers: eventHandler[];
  handler?: eventHandler;
  params?: any[];
}
export interface IActionTriggerPayload {
  eventName: string;
  params: any[];
}

export interface IActionOffPayload {
  eventName: string;
  handler?: eventHandler;
}

export interface IState {
  eventQueue: IEventQueue;
  eventNameQueue: string[];
}

export enum IActionType {
  ON = 'on',
  OFF = 'off',
  TRIGGER = 'trigger',
  ONCE = 'once',
  ADD = 'add',
  CLEAR = 'clear',
}

export interface IAction {
  type: IActionType;
  payload:
    | string
    | string[]
    | IActionAddPayload
    | IActionTriggerPayload
    | IActionOffPayload
    | null;
}

export const safeNamespace = ['__taro', 'at'];

const initState: IState = {
  eventQueue: {},
  eventNameQueue: [],
};

function useEvent(namespace: string) {
  const { eventBus } = useContext(context);

  const setListener = useCallback(
    (eventName: string, ...handlers: eventHandler[]) => {
      if (!eventName || safeNamespace.some((v) => eventName.startsWith(v))) {
        console.warn('eventName not valid. listen failed');
      } else if (!handlers.length) {
        console.warn('you mast provide one handler to listen. add failed');
      } else {
        dispatch({
          type: IActionType.ADD,
          payload: {
            eventName: wrapperEvent(namespace, eventName),
            handlers,
          },
        });
      }
    },
    [],
  );

  const setListenerOnce = useCallback(
    (eventName: string, handler: eventHandler) => {
      if (!eventName || !handler) {
        console.warn('you must provide eventName and handler');
        return;
      }
      const sideEffectHandler = (...args: any[]) => {
        handler(...args);
        removeListener(eventName, sideEffectHandler);
      };
      setListener(eventName, sideEffectHandler);
    },
    [],
  );

  const emitEvent = useCallback((eventName: string, ...params: any[]) => {
    if (!eventName || !params.length) {
      console.warn('eventName or args not provide');
      return;
    }
    const realEventName = wrapperEvent(namespace, eventName);

    dispatch({
      type: IActionType.TRIGGER,
      payload: {
        eventName: realEventName,
        params,
      },
    });
  }, []);

  const clearListener = useCallback((eventName?: string) => {
    removeListener(eventName);
  }, []);

  const safeRemoveEvents = useCallback(
    (
      eventNameQueue: string[],
      eventQueue,
      ...handlers: eventHandler[]
    ): IEventQueue => {
      const removeEventName = eventNameQueue.filter(
        (v) => !safeNamespace.some((n) => v.startsWith(n)),
      );

      removeEventName.forEach((v) => eventBus.off(v, ...(handlers || [])));
      const offQueue: IEventQueue = {};
      if (eventNameQueue.length === 1 && removeEventName.length) {
        Object.keys(eventQueue).forEach((key) => {
          // check if has handlers
          if (handlers && eventNameQueue.includes(key)) {
            offQueue[key] = eventQueue[key].filter(
              (v: eventHandler) => !handlers.includes(v),
            );
          } else if (!eventNameQueue.includes(key)) {
            offQueue[key] = eventQueue[key];
          }
        });
      }
      return offQueue;
    },
    [],
  );

  const reducer = useCallback(
    (state: IState, { type, payload }: IAction): IState => {
      switch (type) {
        case IActionType.CLEAR:
          if (!payload) {
            safeRemoveEvents(state.eventNameQueue, state.eventQueue);
            return {
              eventQueue: {},
              eventNameQueue: [],
            };
          } else if (!typeOf(payload, ['String', 'Array'])) {
            return state;
          } else {
            return {
              eventNameQueue: state.eventNameQueue.filter((v) => v !== payload),
              eventQueue: safeRemoveEvents(
                [payload as string],
                state.eventQueue,
              ),
            };
          }
        case IActionType.OFF:
          if (!payload) {
            return state;
          } else {
            return {
              eventNameQueue: state.eventNameQueue.filter(
                (v) => v !== (payload as IActionOffPayload).eventName,
              ),
              eventQueue: safeRemoveEvents(
                [(payload as IActionOffPayload).eventName],
                state.eventQueue,
                (payload as IActionOffPayload).handler as (
                  ...args: any[]
                ) => void,
              ),
            };
          }
        case IActionType.ADD:
          if (
            !payload ||
            !(payload as IActionAddPayload).eventName ||
            !(payload as IActionAddPayload).handlers
          ) {
            console.warn(
              'you mast provider eventName and one handler to listen',
            );
            return {
              ...state,
            };
          } else {
            (payload as IActionAddPayload).handlers.forEach((handler) => {
              eventBus.on((payload as IActionAddPayload).eventName, handler);
            });
            return {
              eventNameQueue: [
                ...new Set([
                  ...state.eventNameQueue,
                  (payload as IActionAddPayload).eventName,
                ]),
              ],
              eventQueue: {
                ...state.eventQueue,
                [(payload as IActionAddPayload).eventName]: [
                  ...(state.eventQueue[
                    (payload as IActionAddPayload).eventName
                  ] || []),
                  ...(payload as IActionAddPayload).handlers,
                ],
              },
            };
          }
        case IActionType.TRIGGER:
          if (
            !payload ||
            !(payload as IActionTriggerPayload).eventName ||
            !(payload as IActionTriggerPayload).params
          ) {
            console.warn('you mast provider eventName and one arg to trigger');
            return {
              ...state,
            };
          } else {
            eventBus.trigger(
              (payload as IActionTriggerPayload).eventName,
              ...(payload as IActionTriggerPayload).params,
            );
            // compatible origin Events
            eventBus.trigger(
              (payload as IActionTriggerPayload).eventName.replace(
                namespace,
                '',
              ),
              ...(payload as IActionTriggerPayload).params,
            );
            return {
              ...state,
            };
          }
        case IActionType.ONCE:
          setListenerOnce(
            (payload as IActionAddPayload).eventName,
            (payload as IActionAddPayload).handler as eventHandler,
          );
          return state;
        default:
          return state;
      }
    },
    [],
  );
  const [state, dispatch] = useReducer(reducer, initState);

  const removeListener = useCallback(
    (eventName?: string, handler?: eventHandler) => {
      const realEventName = eventName && wrapperEvent(namespace, eventName);

      dispatch({
        type: realEventName ? IActionType.OFF : IActionType.CLEAR,
        payload: realEventName ? { eventName: realEventName, handler } : null,
      });
    },
    [state],
  );

  return [
    state,
    {
      dispatch,
      setListener,
      setListenerOnce,
      removeListener,
      emitEvent,
      clearListener,
    },
  ];
}

export default useEvent;
