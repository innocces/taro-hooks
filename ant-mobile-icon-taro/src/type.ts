export interface ITaroIconProps {
  size?: number;
  color?: string;
  usePX?: boolean;
}

export type TRecord<T = any> = {
  [_: string]: T;
};
