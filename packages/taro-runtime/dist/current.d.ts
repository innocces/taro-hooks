import { AppInstance, PageInstance } from './dsl/instance';
export interface Router {
  params: Record<string, unknown>;
  path: string;
  onReady: string;
  onHide: string;
  onShow: string;
}
interface Current {
  app: AppInstance | null;
  router: Router | null;
  page: PageInstance | null;
  preloadData?: any;
}
export declare const Current: Current;
export declare const getCurrentInstance: () => Current;
export {};
