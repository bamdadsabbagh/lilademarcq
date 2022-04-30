export function buildNextImageUrl(source: string): string {
  const endpoint = '/_next/image';

  const params = new URLSearchParams({
    url: source,
    w: '3840',
    q: '75',
  });

  return `${endpoint}?${params.toString()}`;
}
