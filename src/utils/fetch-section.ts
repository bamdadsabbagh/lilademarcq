import {fetchContentful} from './fetch-contentful';
import {LDImage, LDText} from './fetch-object';
import {IMAGE_SETTINGS} from '../constants';
import {getPlaceholder} from './get-placeholder';

const querySection = (slug: string) => `
query {
  sectionCollection(where: { slug: "${slug}" }, limit: 1) {
    items {
      slug
      title
      image {
        width
        height
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.highRes},
        })
      }
      body {
        json
      }
    }
  }
}
`;

export interface LDSection {
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
