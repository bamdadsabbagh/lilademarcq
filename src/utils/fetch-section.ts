import {fetchContentful} from './fetch-contentful';
import {LDImage, LDText} from './fetch-object';
import {getPlaceholder} from './get-placeholder';
import {queryImageUrl} from './query-image-url';
import {querySeo} from './query-seo';

const querySection = (slug: string) => `
query {
  sectionCollection(where: { slug: "${slug}" }, limit: 1) {
    items {
      ${querySeo}
      slug
      title
      image {
        width
        height
        ${queryImageUrl()}
      }
      body {
        json
      }
    }
  }
}
`;

export interface LDSection {
  seoTitle: string;
  seoDescription: string;
  seoImage?: LDImage;
  slug: string;
  title: string;
  image?: LDImage;
  body: LDText;
}

interface SectionResponse {
  sectionCollection: {
    items: LDSection[];
  };
}

type SectionSlug =
  'contact'
  | 'about'
  | 'cgv'
  | 'privacy-policy'
  | 'mentions-legales'

export async function fetchSection(slug: SectionSlug): Promise<LDSection> {
  const response: SectionResponse = await fetchContentful(querySection(slug));

  const section = response.sectionCollection.items[0];

  if (section.image) {
    section.image.base64 = await getPlaceholder(section.image.url);
  }

  return section;
}
