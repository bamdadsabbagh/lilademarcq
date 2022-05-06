import {fetchContentful} from './fetch-contentful';
import {LDImage, LDText} from './fetch-object';
import {getPlaceholder} from './get-placeholder';
import {querySeo} from './query-seo';
import {queryImageUrl} from './query-image-url';

const queryPoetry = `
query {
  myPoetryCollection (limit: 1) {
    items {
      ${querySeo}
      title
      body {
        json
      }
      illustration {
        title
        description
        width
        height
        ${queryImageUrl()}
      }
      poem {
        title
        description
        width
        height
        ${queryImageUrl()}
      }
    }
  }
}
`;

export interface LDMyPoetry {
  seoTitle: string;
  seoDescription: string;
  seoImage?: LDImage;
  title: string;
  body: LDText;
  illustration?: LDImage;
  poem?: LDImage;
}

interface PoetryResponse {
  myPoetryCollection: {
    items: LDMyPoetry[];
  };
}

export async function fetchMyPoetry(): Promise<LDMyPoetry> {
  const response: PoetryResponse = await fetchContentful(queryPoetry);
  const poetry = response.myPoetryCollection.items[0];

  poetry.illustration.base64 = await getPlaceholder(poetry.illustration.url);
  poetry.poem.base64 = await getPlaceholder(poetry.poem.url);

  return poetry;
}
