import {fetchContentful} from './fetch-contentful';
import {LDObject, ObjectResponse} from './fetch-object';
import {IMAGE_SETTINGS} from '../constants';

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

const queryObjectsThumbnails = `
query {
  objectCollection {
    items {
      thumbnail {
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.thumbQuality},
          width: ${Math.round(IMAGE_SETTINGS.lowRes * IMAGE_SETTINGS.thumbRatio)},
        })
      }
    }
  }
}
`;

export async function fetchObjects(): Promise<LDObject[]> {
  const response: ObjectResponse = await fetchContentful(queryObjects);
  const thumbnails: ObjectResponse = await fetchContentful(queryObjectsThumbnails);
  const objects = response.objectCollection.items;

  objects.forEach((object, i) => {
    object.thumbnail.base64 = thumbnails.objectCollection.items[i].thumbnail.url;
  });

  objects.sort((a, b) => a.position - b.position);

  return objects;
}
