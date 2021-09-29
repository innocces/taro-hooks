export type valueof<T> = T[keyof T];

interface INavigator extends Navigator {
  getBattery: () => Promise<any>;
}

declare var navigator: INavigator;

declare var wx: any;

declare type TRecord<T = unknown> = {
  [_: string | number]: T;
};
