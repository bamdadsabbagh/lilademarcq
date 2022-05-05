import {fetchContentful} from './fetch-contentful';
import {IMAGE_SETTINGS} from '../constants';
import {getPlaceholder} from './get-placeholder';
import {LDImage} from './fetch-object';

const queryHero = `
query {
  myHeroCollection (limit: 1) {
    items {
      imagesCollection {
        items {
          description
          width
          height
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
`;

interface HeroResponse {
  myHeroCollection: {
    items: Array<{
      imagesCollection: {
        items: LDImage[];
      };
    }>;
  };
}

export async function fetchHero(): Promise<LDImage[]> {
  const response: HeroResponse = await fetchContentful(queryHero);
  const images = response.myHeroCollection.items[0].imagesCollection.items;

  await Promise.all(images.map(async (image) => {
    image.base64 = await getPlaceholder(image.url);
  }));

  return images;
}
