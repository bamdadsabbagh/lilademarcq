import {fetchContentful} from './fetch-contentful';
import {getPlaceholder} from './get-placeholder';
import {LDImage} from './fetch-object';
import {querySeo} from './query-seo';
import {queryImageUrl} from './query-image-url';

const queryMyHome = `
query {
  myHomeCollection (limit: 1) {
    items {
      ${querySeo}
      heroImagesCollection {
        items {
          description
          width
          height
          ${queryImageUrl()}
        }
      }
    }
  }
}
`;

export interface LDMyHome {
  seoTitle: string;
  seoDescription: string;
  seoImage?: LDImage;
  heroImagesCollection: {
    items: LDImage[];
  };
}

interface HeroResponse {
  myHomeCollection: {
    items: LDMyHome[];
  };
}

export async function fetchMyHome(): Promise<LDMyHome> {
  const response: HeroResponse = await fetchContentful(queryMyHome);
  const myHome = response.myHomeCollection.items[0];
  const images = myHome.heroImagesCollection.items;

  await Promise.all(images.map(async (image) => {
    image.base64 = await getPlaceholder(image.url);
  }));

  return myHome;
}
