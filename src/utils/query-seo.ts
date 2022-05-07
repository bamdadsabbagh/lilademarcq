import {queryImageUrl} from './query-image-url';

export const querySeo = `
seoTitle
seoDescription
seoImage {
  ${queryImageUrl(false)}
}
`;
