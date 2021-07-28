export const downloadImage = async (filePath: string) => {
  const responese = await fetch(filePath);
  const blob = await responese.blob();
  return blob;
};

export const generateBlobUrl = (blob: Blob): string => {
  const blobInstance = new Blob([blob], {
    type: 'application/octet-stream',
  });
  const href = window.URL.createObjectURL(blobInstance);
  return href;
};

export const saveImageForH5 = async (filePath: string) => {
  if (filePath) {
    let result = true;
    try {
      const blob = await downloadImage(filePath);
      const href = generateBlobUrl(blob);
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
