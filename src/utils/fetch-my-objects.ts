import {fetchContentful} from './fetch-contentful';
import {getPlaceholder} from './get-placeholder';
import {LDImage} from './fetch-object';
import {queryImageUrl} from './query-image-url';
import {querySeo} from './query-seo';

const queryObjectThumbnail = (slug: string) => `
query {
  objectCollection (where: {slug: "${slug}"}, limit: 1) {
    items {
      thumbnail {
        ${queryImageUrl(false)}
      }
    }
  }
}
`;

export const queryMyObjects = `
query {
  myObjectsCollection {
    items {
      ${querySeo}
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

export interface LDMyObjects {
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: LDImage;
  objectsCollection: {
    items: {
      slug: string;
      name: string;
      description: string;
      thumbnail: LDImage;
    }[];
  };
}

export interface MyObjectsResponse {
  myObjectsCollection: {
    items: LDMyObjects;
  };
}

export async function fetchMyObjects(): Promise<LDMyObjects> {
  const response: MyObjectsResponse = await fetchContentful(queryMyObjects);
  const myObjects = response.myObjectsCollection.items[0];
  const objects = myObjects.objectsCollection.items;

  await Promise.all(objects.map(async (object) => {
    const thumbnailResponse: ObjectThumbnailResponse = await fetchContentful(queryObjectThumbnail(object.slug));
    const thumbnail = thumbnailResponse.objectCollection.items[0].thumbnail;

    object.thumbnail = {} as LDImage;
    object.thumbnail.url = thumbnail.url;
    object.thumbnail.base64 = await getPlaceholder(thumbnail.url);
  }));

  return myObjects;
}
