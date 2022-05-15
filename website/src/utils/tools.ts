/**
 * 根据uri拼接当前baseUrl
 * @param uri {string}
 * @returns {string}
 */
export function generateBaseURI(uri: string) {
  return '//' + uri;
}
