export function validateThumbnailFolder(folder: string[], product: string): void {
  if (folder.length === 0) {
    throw new Error(`Thumbnail folder empty for product: ${product}`);
  }

  if (folder.length > 1) {
    throw new Error(`Too many thumbnails for product: ${product}`);
  }
}
