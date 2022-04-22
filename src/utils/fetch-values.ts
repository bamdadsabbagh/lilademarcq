import {fetchContentful} from './fetch-contentful';

const queryValues = `
query {
  valuesCollection {
    items {
      image {
        url
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
  data: {
    valuesCollection: {
      items: LDValues[];
    };
  };
}

export async function fetchValues(): Promise<LDValues> {
  const response: ValuesResponse = await fetchContentful(queryValues);

  if (!response.data) {
    throw new Error('No data found');
  }

  return response.data.valuesCollection.items[0];
}
