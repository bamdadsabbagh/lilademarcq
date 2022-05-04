import {fetchContentful} from './fetch-contentful';
import {getPlaceholder} from './get-placeholder';
import {IMAGE_SETTINGS} from '../constants';

const queryValues = `
query {
  valuesCollection {
    items {
      image {
        width
        height
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.highRes},
        })
      }
      topLeftTitle
      topLeftBody
      topCenterTitle
      topCenterBody
      topRightTitle
      topRightBody
      bottomLeftTitle
      bottomLeftBody
      bottomCenterTitle
      bottomCenterBody
      bottomRightTitle
      bottomRightBody
    }
  }
}
`;

export interface LDValues {
  image: {
    url: string;
    base64: string;
  };
  topLeftTitle: string;
  topLeftBody: string;
  topCenterTitle: string;
  topCenterBody: string;
  topRightTitle: string;
  topRightBody: string;
  bottomLeftTitle: string;
  bottomLeftBody: string;
  bottomCenterTitle: string;
  bottomCenterBody: string;
  bottomRightTitle: string;
  bottomRightBody: string;
}

interface ValuesResponse {
  valuesCollection: {
    items: LDValues[];
  };
}

export async function fetchValues(): Promise<LDValues> {
  const response: ValuesResponse = await fetchContentful(queryValues);
  const values = response.valuesCollection.items[0];

  values.image.base64 = await getPlaceholder(values.image.url);

  return values;
}
