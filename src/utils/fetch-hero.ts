import {fetchContentful} from './fetch-contentful';
import {IMAGE_SETTINGS} from '../constants';
import {getPlaceholder} from './get-placeholder';

const queryHero = `
query {
  myHeroCollection (limit: 1) {
    items {
      richImagesCollection {
        items {
          shortDescription
          longDescription
          link
          image {
            url(transform: { 
              format: WEBP,
              quality: ${IMAGE_SETTINGS.quality},
              width: ${IMAGE_SETTINGS.highRes},
            })
          }
        }
      }
    }
  }
}
`;

export interface RichImage {
  shortDescription: string;
  longDescription?: string;
  link?: string;
  image: {
    url: string;
    base64: string;
  };
}

interface HeroResponse {
  myHeroCollection: {
    items: Array<{
      richImagesCollection: {
        items: RichImage[];
      };
    }>;
  };
}

export async function fetchHero(): Promise<RichImage[]> {
  const response: HeroResponse = await fetchContentful(queryHero);
  const slides = response.myHeroCollection.items[0].richImagesCollection.items;

  await Promise.all(slides.map(async (slide) => {
    slide.image.base64 = await getPlaceholder(slide.image.url);
  }));

  return slides;
}
