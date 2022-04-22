import {theme} from '../app/styles/theme';

export function getColorBySlug(slug: string | undefined): string | null {
  if (!slug) {
    return 'black';
  }

  if (theme[slug]) {
    return theme[slug];
  }

  return slug;
}
