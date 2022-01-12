import { CSSProperties } from 'react';

export interface ITaroIconProps {
  size?: number | string;
  color?: string;
  usePX?: boolean;
  style?: CSSProperties;
}

export type TRecord<T = any> = {
  [_: string]: T;
};
