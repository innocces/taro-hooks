export declare const window:
  | Window
  | {
      navigator:
        | Navigator
        | {
            appCodeName: string;
            appName: string;
            appVersion: string;
            cookieEnabled: boolean;
            mimeTypes: never[];
            onLine: boolean;
            platform: string;
            plugins: never[];
            product: string;
            productSub: string;
            userAgent: string;
            vendor: string;
            vendorSub: string;
          };
      document: import('..').TaroDocumentInstance;
    };
