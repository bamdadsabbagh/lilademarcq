import {fetchContentful} from './fetch-contentful';
import {LDObject, ObjectResponse} from './fetch-object';
import {IMAGE_SETTINGS} from '../constants';
import {getPlaceholder} from './get-placeholder';

const queryObjects = `
query {
  objectCollection {
    items {
      slug
      position
      name
      description
      thumbnail {
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

export async function fetchObjects(): Promise<LDObject[]> {
  const response: ObjectResponse = await fetchContentful(queryObjects);
  const objects = response.objectCollection.items;

  await Promise.all(objects.map(async (object) => {
    object.thumbnail.base64 = await getPlaceholder(object.thumbnail.url);
  }));

  objects.sort((a, b) => a.position - b.position);

  return objects;
}
