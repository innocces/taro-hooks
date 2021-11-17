import type { TRecord } from './type';
export function hex2rgb(hex: string): string {
  const rgb: number[] = [];

  //去除前缀 # 号
  hex = hex.substr(1);

  if (hex.length === 3) {
    // 处理 '#abc' 成 '#aabbcc'
    hex = hex.replace(/(.)/g, '$1$1');
  }

  hex.replace(/../g, (color: string) => {
    // 按16进制将字符串转换为数字
    rgb.push(parseInt(color, 0x10));

    return color;
  });

  return !rgb.length || rgb.some(isNaN)
    ? 'currentColor'
    : 'rgb(' + rgb.join(',') + ')';
}

const settings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/,
};

export function template(text: string, data: TRecord) {
  var matcher = RegExp(
    [
      settings.escape.source,
      settings.interpolate.source,
      settings.evaluate.source,
    ].join('|') + '|$',
    'g',
  );

  return text.replace(matcher, function (match, escape, interpolate) {
    if (match && interpolate) {
      const key = interpolate.trim();
      return key === 'color' ? data[key] : `'${data[key]}'`;
    }
    return match;
  });
}
