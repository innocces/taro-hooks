/// <reference types="node" />
export declare let now: any;
declare let raf:
  | typeof requestAnimationFrame
  | ((callback: any) => NodeJS.Timeout);
declare let caf: typeof cancelAnimationFrame;
export { raf, caf };
