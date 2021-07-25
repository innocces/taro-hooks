import type { Func } from '../interface';
export declare const useDidShow: (fn: Func) => void;
export declare const useDidHide: (fn: Func) => void;
export declare const usePullDownRefresh: (fn: Func) => void;
export declare const useReachBottom: (fn: Func) => void;
export declare const usePageScroll: (fn: Func) => void;
export declare const useResize: (fn: Func) => void;
export declare const useShareAppMessage: (fn: Func) => void;
export declare const useTabItemTap: (fn: Func) => void;
export declare const useTitleClick: (fn: Func) => void;
export declare const useOptionMenuClick: (fn: Func) => void;
export declare const usePullIntercept: (fn: Func) => void;
export declare const useShareTimeline: (fn: Func) => void;
export declare const useAddToFavorites: (fn: Func) => void;
export declare const useReady: (fn: Func) => void;
export declare const useRouter: (
  dynamic?: boolean,
) => import('../current').Router | null;
export declare const useScope: () => undefined;
