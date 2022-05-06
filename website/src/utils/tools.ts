/**
 * 获取当前协议头
 * @returns {string}
 */
export function getProtocol() {
  return window.location.protocol + '//';
}

/**
 * 根据uri拼接当前baseUrl
 * @param uri {string}
 * @returns {string}
 */
export function generateBaseURI(uri: string) {
  return getProtocol() + uri;
}
