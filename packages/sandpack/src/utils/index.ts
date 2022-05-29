/**
 * due to sandpack display tab file to last file name
 * @param {string} filePath
 * @returns {string}
 */
export function dealSubFilePath(filePath: string): string {
  const isSub = filePath.includes('/');

  if (!isSub) return filePath;

  // check sub -> index.xxx
  const [main, sub] = filePath.split('/');
  if (filePath.includes('/index.')) {
    return main + sub.replace('index', '');
  }

  return sub;
}
