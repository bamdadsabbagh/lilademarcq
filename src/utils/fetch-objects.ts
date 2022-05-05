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

const queryNewObjects = `
query {
  myObjectsCollection {
    items {
      objectsCollection {
        items {
          slug
          name
          description
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

interface LDMyObject {
  slug: string;
  name: string;
  description: string;
  thumbnail: LDImage;
}

interface MyObjectsResponse {
  myObjectsCollection: {
    items: Array<{
      objectsCollection: {
        items: LDMyObject[];
      };
    }>;
  };
}

export async function fetchObjects(): Promise<LDMyObject[]> {
  const response: MyObjectsResponse = await fetchContentful(queryNewObjects);
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
