import { escapeUnit } from '../../utils/tool'
export const template = (
  stroke: string,
  fillStroke: string,
  strokeDasharray: string,
  strokeDashOffset: string,
  strokeWidth: string
) => {
  const r = 25 - Number(escapeUnit(strokeWidth)) / 2
  return `
    <svg xmlns='http://www.w3.org/2000/svg' height='100%' width='100%' viewBox='0 0 50 50'>
      <circle fill='transparent' stroke='${stroke}' stroke-width='${strokeWidth}' cx='25' cy='25' r='${r}' style=\\'transform: rotate(-90deg); transform-origin: 50% 50%;\\'></circle>
      <circle fill='transparent' stroke='${fillStroke}' stroke-width='${strokeWidth}' r='${r}' stroke-linecap='round' stroke-dasharray='${strokeDasharray}'  stroke-dashoffset='${strokeDashOffset}' cx='25' cy='25' style=\\'transform: rotate(-90deg); transform-origin: 50% 50%; transition: stroke-dashoffset .35s;\\'></circle>
    </svg>
  `.replace(/\n/g, '')
}
