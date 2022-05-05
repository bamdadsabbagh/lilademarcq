import {fetchContentful} from './fetch-contentful';
import {IMAGE_SETTINGS} from '../constants';
import {getPlaceholder} from './get-placeholder';
import {LDImage} from './fetch-object';

const queryObjectThumbnail = (slug: string) => `
query {
  objectCollection (where: {slug: "${slug}"}, limit: 1) {
    items {
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

export const queryMyObjects = `
query {
  myObjectsCollection {
    items {
      objectsCollection {
        items {
          slug
          name
          description
          menuName
        }
      }
    }
  }
}
`;

interface ObjectThumbnailResponse {
  objectCollection: {
    items: Array<{
      thumbnail: {
        url: string;
        base64: string;
      };
    }>;
  };
}

export interface LDMyObject {
  slug: string;
  name: string;
  description: string;
  thumbnail: LDImage;
}

export interface MyObjectsResponse {
  myObjectsCollection: {
    items: Array<{
      objectsCollection: {
        items: LDMyObject[];
      };
    }>;
  };
}

export async function fetchMyObjects(): Promise<LDMyObject[]> {
  const response: MyObjectsResponse = await fetchContentful(queryMyObjects);
  const objects = response.myObjectsCollection.items[0].objectsCollection.items;

  await Promise.all(objects.map(async (object) => {
    const thumbnailResponse: ObjectThumbnailResponse = await fetchContentful(queryObjectThumbnail(object.slug));
    const thumbnail = thumbnailResponse.objectCollection.items[0].thumbnail;

    object.thumbnail = {} as LDImage;
    object.thumbnail.url = thumbnail.url;
    object.thumbnail.base64 = await getPlaceholder(thumbnail.url);
  }));

  return objects;
}
