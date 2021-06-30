import { createContext } from 'react';
import { eventCenter, Events } from '@tarojs/taro';

export interface IEvents extends Events {
  display: () => string[];
  callbacks: {
    [_: string]: any;
  };
}

export interface IEventContext {
  eventBus: IEvents;
}

export function wrapperEvent(namespace: string, eventName: string): string {
  return namespace ? `${namespace}.${eventName}` : eventName;
}

(eventCenter as IEvents).display = () => {
  return Object.keys((eventCenter as IEvents).callbacks);
};

const EventBus = createContext<IEventContext>({
  eventBus: eventCenter as IEvents,
});

export { EventBus as context };
