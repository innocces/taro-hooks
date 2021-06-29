export const noop = () => {};

export const typeOf = (target: any, type: string | string[]): boolean => {
  return [type]
    .flat()
    .some((v) => Object.prototype.toString.call(target) === `[object ${v}]`);
};
