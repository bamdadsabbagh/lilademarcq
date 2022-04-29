import {fetchContentful} from './fetch-contentful';
import {LDImage, LDText} from './fetch-object';
import {IMAGE_SETTINGS} from '../constants';

const querySection = (slug: string) => `
query {
  sectionCollection(where: { slug: "${slug}" }, limit: 1) {
    items {
      slug
      title
      image {
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.lowRes},
        })
      }
      body {
        json
      }
    }
  }
}
`;

const querySectionThumbnail = (slug: string) => `
query {
  sectionCollection(where: { slug: "${slug}" }, limit: 1) {
    items {
      image {
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.thumbQuality},
          width: ${Math.round(IMAGE_SETTINGS.lowRes * IMAGE_SETTINGS.thumbRatio)},
        })
      }
    }
  }
}
`;

export interface LDSection {
  slug: string;
  title: string;
  image: LDImage;
  body: LDText;
}

interface SectionResponse {
  sectionCollection: {
    items: LDSection[];
  };
}

export async function fetchSection(slug: string): Promise<LDSection> {
  const response: SectionResponse = await fetchContentful(querySection(slug));
  const thumbnail: SectionResponse = await fetchContentful(querySectionThumbnail(slug));

  const section = response.sectionCollection.items[0];

  section.image.base64 = thumbnail.sectionCollection.items[0].image.url;

  return section;
}
