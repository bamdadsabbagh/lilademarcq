import {Document} from '@contentful/rich-text-types';
import {fetchContentful} from './fetch-contentful';
import {IMAGE_SETTINGS} from '../constants';
import {getPlaceholder} from './get-placeholder';

const queryObject = (slug: string) => `
query {
  objectCollection(where: { slug: "${slug}" }, limit: 1) {
    items {
      slug
      position
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
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.lowRes},
        })
      }
      badge {
        width
        height
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.highRes},
        })
      }
      imagesCollection {
        items {
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
  slug: string;
  position: number;
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
