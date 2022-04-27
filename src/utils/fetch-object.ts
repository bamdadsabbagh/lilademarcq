import {Document} from '@contentful/rich-text-types';
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
      thumbnail {
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
  thumbnail: {
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
  return objects[0];
}
