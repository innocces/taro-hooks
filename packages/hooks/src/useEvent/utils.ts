import { generateGeneralFail } from '../utils/tool';
import { BANNAMESPACE } from '../constant';

import type { Noop } from '../type';

export function prefixClsEvent(prefixCls: string, eventName: string): string {
  return prefixCls?.length ? `${prefixCls}.${eventName}` : eventName;
}

export function isSafeEvent(eventName: string): boolean {
  return BANNAMESPACE.every((ban) => !eventName.startsWith(ban));
}

export function generateCheck(eventName, handlers: Noop[]): boolean {
  if (!eventName || !handlers?.length) {
    generateGeneralFail('EVENT CHANEL', 'event chanel params error');
    return false;
  }

  if (!isSafeEvent(eventName)) {
    generateGeneralFail('EVENT CHANEL', `${eventName} is not valid`);
    return false;
  }

  return true;
}
