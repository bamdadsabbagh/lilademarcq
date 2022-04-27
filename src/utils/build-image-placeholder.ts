export function buildImagePlaceholder(width: number, height: number): string {
  const uri = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="${width}" height="${height}"/>`;

  return encodeURI(uri);
}
