import {LDObject, ObjectResponse} from './fetch-object';
import {fetchContentful} from './fetch-contentful';

const queryMenu = `
query {
  objectCollection {
    items {
      slug
      position
      name
      menuName
    }
  }
}
`;

export async function fetchMenu(): Promise<LDObject[]> {
  const response = await fetchContentful<ObjectResponse>(queryMenu);
  return response.objectCollection.items;
}
