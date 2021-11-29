export default function (hex: string): string {
  if (!hex || !hex.length || hex.includes('rgb') || hex.startsWith('var')) {
    return hex
  }

  const rgb: number[] = []

  //去除前缀 # 号
  hex = hex.substr(1)

  if (hex.length === 3) {
    // 处理 '#abc' 成 '#aabbcc'
    hex = hex.replace(/(.)/g, '$1$1')
  }

  hex.replace(/../g, (color: string) => {
    // 按16进制将字符串转换为数字
    rgb.push(parseInt(color, 0x10))

    return color
  })

  return !rgb.length || rgb.some(isNaN)
    ? 'currentColor'
    : 'rgb(' + rgb.join(',') + ')'
}
