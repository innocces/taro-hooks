declare type Callback1<T1> = (arg1: T1) => any;
declare type Callback2<T1, T2> = (arg1: T1, arg2: T2) => any;
declare type Callback3<T1, T2, T3> = (arg1: T1, arg2: T2, arg3: T3) => any;
declare type Callback4<T1, T2, T3, T4> = (
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
) => any;
declare type Callback5<T1, T2, T3, T4, T5> = (
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
  arg5: T5,
) => any;
declare type Callback6Rest<T1, T2, T3, T4, T5, T6> = (
  arg1: T1,
  arg2: T2,
  arg3: T3,
  arg4: T4,
  arg5: T5,
  arg6: T6,
  ...rest: any[]
) => any;
export declare class Events {
  private callbacks?;
  static eventSplitter: RegExp;
  constructor(opts?: any);
  on<T>(event: string, callback: Callback1<T>, context: any): this;
  on<T1, T2>(event: string, callback: Callback2<T1, T2>, context: any): this;
  on<T1, T2, T3>(
    event: string,
    callback: Callback3<T1, T2, T3>,
    context: any,
  ): this;
  on<T1, T2, T3, T4>(
    event: string,
    callback: Callback4<T1, T2, T3, T4>,
    comtext: any,
  ): this;
  on<T1, T2, T3, T4, T5>(
    event: string,
    callback: Callback5<T1, T2, T3, T4, T5>,
    context: any,
  ): this;
  on<T1, T2, T3, T4, T5, T6>(
    event: string,
    callback: Callback6Rest<T1, T2, T3, T4, T5, T6>,
    context: any,
  ): this;
  once(events: any, callback: any, context: any): this;
  off(events: any, callback: any, context: any): this;
  trigger(event: string): any;
  trigger<T1>(event: string, arg: T1): any;
  trigger<T1, T2>(event: string, arg1: T1, arg2: T2): any;
  trigger<T1, T2, T3>(event: string, arg1: T1, arg2: T2, arg3: T3): any;
  trigger<T1, T2, T3, T4>(
    event: string,
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
  ): any;
  trigger<T1, T2, T3, T4, T5>(
    event: string,
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
  ): any;
  trigger<T1, T2, T3, T4, T5, T6>(
    event: string,
    arg1: T1,
    arg2: T2,
    arg3: T3,
    arg4: T4,
    arg5: T5,
    arg6: T6,
    ...rest: any[]
  ): any;
}
export declare type EventsType = typeof Events;
declare const eventCenter: Events;
export { eventCenter };
