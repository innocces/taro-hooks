interface Position {
  index: number;
  column: number;
  line: number;
}
export interface Token {
  type: string;
  content?: string;
  position?: {
    start?: Position;
    end?: Position;
  };
  close?: boolean;
}
export declare class Scaner {
  private tokens;
  private position;
  private html;
  constructor(html: string);
  scan(): Token[];
  private scanText;
  private scanComment;
  private scanTag;
  private scanTagStart;
  private scanTagEnd;
  private scanTagName;
  private scanAttrs;
  private scanSkipTag;
}
export {};
