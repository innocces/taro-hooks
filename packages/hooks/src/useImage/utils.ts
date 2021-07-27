export const saveImageForH5 = async (filePath: string) => {
  if (filePath) {
    let result = true;
    try {
      const responese = await fetch(filePath);
      const blob = await responese.blob();
      const blobInstance = new Blob([blob], {
        type: 'application/octet-stream',
      });
      const href = window.URL.createObjectURL(blobInstance);
      const downloadElement = document.createElement('a');
      downloadElement.href = href;
      downloadElement.download = filePath.split('/').reverse()[0];
      document.body.appendChild(downloadElement);
      downloadElement.click();
      document.body.removeChild(downloadElement);
      window.URL.revokeObjectURL(href);
    } catch (e) {
      result = false;
    }
    return result;
  }
  return false;
};
