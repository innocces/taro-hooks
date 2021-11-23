export default (color?: string): string => {
  color = color || 'currentColor'
  const base64SVG = `
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='100%'
    viewBox='0 0 100 40'
  >
    <g stroke='none' stroke-width='1' fill='${color}' fill-rule='evenodd'>
      <g transform='translate(-100.000000, -71.000000)'>
        <g transform='translate(95.000000, 71.000000)'>
          <g transform='translate(5.000000, 0.000000)'>
            ${[0, 1, 2]
              .map(
                i =>
                  `<rect
                fill='${color}'
                x='${20 + i * 26}'
                y='16'
                width='8'
                height='8'
                rx='2'
              >
                <animate
                  attributeName='y'
                  from='16'
                  to='16'
                  dur='2s'
                  begin='${i * 0.2}s'
                  repeatCount='indefinite'
                  values='16; 6; 26; 16; 16'
                  keyTimes='0; 0.1; 0.3; 0.4; 1'
                  id='circ-anim'
                />
              </rect>`
              )
              .join('')}
          </g>
        </g>
      </g>
    </g>
  </svg>
  `

  const escapeSVG = base64SVG
    .replace(/\n/g, '')
    .replace(/<|>/g, (str: string) => encodeURIComponent(str))
  return `data:image/svg+xml, ${escapeSVG}`
}
