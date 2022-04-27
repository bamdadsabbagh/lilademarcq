export enum NextImageWidths {
  l = 1920,
  xl = 3840,
}

export function buildNextImageUrl(source: string, width: number, quality: number): string {
  const host = window.location.origin;
  const endpoint = '/_next/image';

  const params = new URLSearchParams({
    url: source,
    w: width.toString(),
    q: quality.toString(),
  });

  return `${host}${endpoint}?${params.toString()}`;
}
