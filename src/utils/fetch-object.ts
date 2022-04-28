import {Document} from '@contentful/rich-text-types';
import {getPlaiceholder} from 'plaiceholder';
import {fetchContentful} from './fetch-contentful';

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
        url
      }
      badge {
        url
      }
      imagesCollection {
        items {
          title
          description
          url
          width
          height
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
  base64?: string; // server generated
}

export interface LDText {
  json: Document;
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
    base64?: string; // server generated
  };
  badge?: {
    url: string;
  };
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
  const objects = response.objectCollection.items;
  const object = objects[0];

  // thumbnail
  const {base64: thumbnailBase64} = await getPlaiceholder(object.thumbnail.url);
  object.thumbnail.base64 = thumbnailBase64;

  // images
  const images = object.imagesCollection.items;
  await Promise.all(images.map(async (image) => {
    const {base64} = await getPlaiceholder(image.url);
    image.base64 = base64;
  }));

  return object;
}
