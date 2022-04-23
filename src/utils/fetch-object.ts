import {fetchContentful} from './fetch-contentful';
import {LDImage, RichText} from './fetch-objects';

const queryObject = (slug: string) => `
query {
  objectCollection(where: { slug: "${slug}" }, limit: 1) {
    items {
      slug
      position
      color
      name
      description
      structure
      structureDetails
      imagesCollection {
        total
        items {
          title
          description
          url
        }
      }
      body {
        json
      }
    }
  }
}
`;

export interface LDObject {
  slug: string;
  position: number;
  color: string;
  name: string;
  menuName: string | null;
  description: string;
  structure: string;
  structureDetails: string;
  thumbnail: {
    url: string;
  };
  imagesCollection: {
    total: number;
    items: LDImage[];
  };
  body: RichText;
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
