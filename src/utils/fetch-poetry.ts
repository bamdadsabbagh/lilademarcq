import {fetchContentful} from './fetch-contentful';
import {IMAGE_SETTINGS} from '../constants';
import {LDImage, LDText} from './fetch-object';

const queryPoetry = `
query {
  myPoetryCollection (limit: 1) {
    items {
      title
      body {
        json
      }
      illustration {
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.lowRes},
        })
      }
      poem {
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.lowRes},
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
  return response.myPoetryCollection.items[0];
}
