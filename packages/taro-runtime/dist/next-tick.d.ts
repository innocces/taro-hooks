import type { Func } from './interface';
export declare const nextTick: (
  cb: Func,
  ctx?: Record<string, any> | undefined,
) => void;
