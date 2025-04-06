const { getSourceCodeWithOptions } = require('./source')
const matchREG = /^<code src="(\S+)"( group="(\S+)")?.+\/>$/;

exports.processCodeInline = (options) => ({ filePath, fileContent }) => {
  const isMd = filePath.endsWith('.md');
  return isMd ? fileContent.split(/\n/).map(line => {
    const matches = line?.match?.(matchREG);
    if (matches) {
      const fileAbsPath = matches[1]
      const group = matches[3]
      if (fileAbsPath?.startsWith?.('use')) {
        return `\`${JSON.stringify(getSourceCodeWithOptions(group ? [group, fileAbsPath].join('/') : fileAbsPath, options))}\``
      }
    }

    return line
  }).join('\n') : fileContent
}
