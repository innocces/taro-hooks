import { useCallback, useContext, useReducer, useRef } from 'react';
import { context, wrapperEvent } from '../context';

export interface IEventQueue {
  [_: string]: (() => void)[];
}

export interface IActionAddPayload {
  eventName: string;
  handlers: (() => void)[];
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
  payload: string | string[] | IActionAddPayload | null;
}

export const safeNamespace = ['__taro', 'at'];

const initState: IState = {
  eventQueue: {},
  eventNameQueue: [],
};

function useEvent(namespace: string) {
  const { eventBus } = useContext(context);

  const setListener = useCallback(
    (eventName: string, ...handlers: (() => void)[]) => {
      if (!eventName || safeNamespace.some((v) => eventName.startsWith(v))) {
        console.warn('eventName not valid. listen failed');
      } else if (!handlers.length) {
        console.warn('you mast provide one handler to listen. add failed');
      } else {
        dispatch({
          type: IActionType.ADD,
          payload: {
            eventName,
            handlers,
          },
        });
      }
    },
    [],
  );

  const removeListener = useCallback(() => {}, []);

  const emitEvent = useCallback(() => {}, []);

  const clearListener = useCallback((eventName?: string) => {
    const { eventNameQueue, eventQueue } = state;
    if (!eventNameQueue) {
      console.warn('there is no event to clear');
      return;
    }
    const realEventName = eventName && wrapperEvent(namespace, eventName);
    if (!realEventName || !eventNameQueue.includes(realEventName)) {
      console.warn(
        "you don't provide eventName, it will remove all listener. Thoese listeners will be remove: ",
      );
      console.table(eventQueue);
    }

    if (realEventName && eventNameQueue.includes(realEventName)) {
      console.log('Thoese listeners will be remove: ');
      console.table({
        [eventName as string]: eventQueue[realEventName],
      });
      dispatch({
        type: IActionType.CLEAR,
        payload: realEventName,
      });
    }
  }, []);

  const safeRemoveEvents = useCallback(
    (eventNameQueue: string[], eventQueue): IEventQueue => {
      const removeEventName = eventNameQueue.filter(
        (v) => !safeNamespace.some((n) => v.startsWith(n)),
      );

      removeEventName.forEach((v) => eventBus.off(v));
      const offQueue: IEventQueue = {};
      if (eventNameQueue.length === 1 && removeEventName.length) {
        Object.keys(eventQueue).forEach((key) => {
          if (!eventNameQueue.includes(key)) {
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
              eventNameQueue: eventBus.display(),
            };
          } else {
            return {
              eventNameQueue: state.eventNameQueue.filter((v) => v !== payload),
              eventQueue: safeRemoveEvents(
                [payload as string],
                state.eventQueue,
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
                  ...state.eventQueue[(payload as IActionAddPayload).eventName],
                  ...(payload as IActionAddPayload).handlers,
                ],
              },
            };
          }
        default:
          return state;
      }
    },
    [],
  );
  const [state, dispatch] = useReducer(reducer, initState);

  return [
    state,
    {
      dispatch,
      setListener,
      removeListener,
      emitEvent,
      clearListener,
    },
  ];
}

export default useEvent;
