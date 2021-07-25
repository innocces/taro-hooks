declare class Performance {
  private recorder;
  start(id: string): void;
  stop(id: string): void;
}
export declare const perf: Performance;
export {};
