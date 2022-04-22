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
  const response: ObjectResponse = await fetchContentful(queryMenu);

  if (!response.data) {
    throw new Error('No data found');
  }

  return response.data.objectCollection.items;
}
