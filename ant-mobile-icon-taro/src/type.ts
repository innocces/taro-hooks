import { CSSProperties } from 'react';

export interface ITaroIconProps {
  size?: number;
  color?: string;
  usePX?: boolean;
  style?: CSSProperties;
}

export type TRecord<T = any> = {
  [_: string]: T;
};
