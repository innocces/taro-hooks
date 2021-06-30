import { useCallback, useContext, useReducer, useRef } from 'react';
import { context, wrapperEvent } from '../context';

export interface IEventQueue {
  [_: string]: (() => void)[];
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
  payload: string | string[] | null;
}

export const safeNamespace = ['__taro', 'at'];

const initState: IState = {
  eventQueue: {},
  eventNameQueue: [],
};

function useEvent(namespace: string) {
  const { eventBus } = useContext(context);

  const setListener = useCallback(() => {}, []);

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

  const safeRemoveEvents = useCallback(() => {}, []);

  const reducer = useCallback(
    (state: IState, { type, payload }: IAction): IState => {
      switch (type) {
        case IActionType.CLEAR:
          if (!payload) {
            eventBus.off();
          } else {
            eventBus.off(payload as string);
          }
          return {
            ...state,
          };
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
