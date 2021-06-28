export const noop = () => {};

export const typeOf = (target: any, type: string): boolean => {
  return Object.prototype.toString.call(target) === `[object ${type}]`;
};
