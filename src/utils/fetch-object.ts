import {Document} from '@contentful/rich-text-types';
import {fetchContentful} from './fetch-contentful';
import {getPlaceholder} from './get-placeholder';
import {queryImageUrl} from './query-image-url';
import {querySeo} from './query-seo';

const queryObject = (slug: string) => `
query {
  objectCollection(where: { slug: "${slug}" }, limit: 1) {
    items {
      ${querySeo}
      slug
      color
      name
      description
      madeIn
      structure
      structureDetails
      formTitle
      vimeo
      thumbnail {
        width
        height
        ${queryImageUrl(false)}
      }
      badge {
        width
        height
        ${queryImageUrl()}
      }
      imagesCollection {
        items {
          title
          description
          width
          height
          ${queryImageUrl()}
        }
      }
      body {
        json
      }
    }
  }
}
`;

export interface LDImage {
  title: string;
  description: string;
  url: string;
  width: number;
  height: number;
  base64: string;
}

export interface LDText {
  json: Document;
}

export interface LDBadge {
  url: string;
  base64: string;
}

export interface LDObject {
  seoTitle: string;
  seoDescription: string;
  seoImage?: LDImage;
  slug: string;
  color: string;
  name: string;
  menuName?: string;
  madeIn: string;
  description: string;
  structure: string;
  structureDetails: string;
  formTitle: string;
  vimeo?: string;
  thumbnail: {
    url: string;
    base64: string;
  };
  badge?: LDBadge;
  imagesCollection: {
    items: LDImage[];
  };
  body: LDText;
}

export interface ObjectResponse {
  objectCollection: {
    items: LDObject[];
  };
}

export async function fetchObject(slug: string): Promise<LDObject> {
  const response: ObjectResponse = await fetchContentful(queryObject(slug));
  const object = response.objectCollection.items[0];

  // thumbnail
  object.thumbnail.base64 = await getPlaceholder(object.thumbnail.url);

  // badge
  if (object.badge) {
    object.badge.base64 = await getPlaceholder(object.badge.url);
  }

  // images
  await Promise.all(object.imagesCollection.items.map(async (image) => {
    image.base64 = await getPlaceholder(image.url);
  }));

  return object;
}
