import { PREFIX } from './constant';

const baseLogStyle = 'color: #8843e7; font-weight: bold;';

export function logCtor(style = ''): (...args: unknown[]) => void {
  return (...args: unknown[]) => {
    args.forEach((logMsg) => {
      if (typeof logMsg === 'string') {
        console.debug(`%c${PREFIX}---${logMsg}`, baseLogStyle + style);
      } else {
        console.debug(PREFIX, '---', logMsg);
      }
    });
  };
}

export const log = logCtor();

export const logError = logCtor('color: #d14; text-decoration: underline;');
