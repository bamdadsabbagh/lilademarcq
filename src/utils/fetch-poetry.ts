import {fetchContentful} from './fetch-contentful';
import {IMAGE_SETTINGS} from '../constants';
import {LDImage, LDText} from './fetch-object';
import {getPlaceholder} from './get-placeholder';

const queryPoetry = `
query {
  myPoetryCollection (limit: 1) {
    items {
      title
      body {
        json
      }
      illustration {
        title
        description
        width
        height
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.highRes},
        })
      }
      poem {
        title
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
`;

export interface PoetryInterface {
  title: string;
  body: LDText;
  illustration?: LDImage;
  poem?: LDImage;
}

interface PoetryResponse {
  myPoetryCollection: {
    items: PoetryInterface[];
  };
}

export async function fetchPoetry(): Promise<PoetryInterface> {
  const response: PoetryResponse = await fetchContentful(queryPoetry);
  const poetry = response.myPoetryCollection.items[0];

  poetry.illustration.base64 = await getPlaceholder(poetry.illustration.url);
  poetry.poem.base64 = await getPlaceholder(poetry.poem.url);

  return poetry;
}
