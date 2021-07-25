export declare function makeMap(
  str: string,
  expectsLowerCase?: boolean,
): (key: string) => boolean;
export declare const specialMiniElements: {
  img: string;
  iframe: string;
};
export declare const isMiniElements: (key: string) => boolean;
export declare const isInlineElements: (key: string) => boolean;
export declare const isBlockElements: (key: string) => boolean;
