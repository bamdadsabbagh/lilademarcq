import {fetchContentful} from './fetch-contentful';
import {LDObject, ObjectResponse} from './fetch-object';

const queryObjects = `
query {
  objectCollection {
    items {
      slug
      position
      name
      description
      thumbnail {
        url
      }
    }
  }
}
`;

export async function fetchObjects(): Promise<LDObject[]> {
  const response: ObjectResponse = await fetchContentful(queryObjects);

  const objects = response.objectCollection.items;
  objects.sort((a, b) => a.position - b.position);

  return objects;
}
