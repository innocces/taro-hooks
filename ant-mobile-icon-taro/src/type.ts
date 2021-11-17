import { CSSProperties } from 'react';

export interface ITaroIconProps {
  size?: number;
  style?: CSSProperties;
  color?: string;
  usePX?: boolean;
}

export type TRecord<T = any> = {
  [_: string]: T;
};
