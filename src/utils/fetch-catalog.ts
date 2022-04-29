import {fetchContentful} from './fetch-contentful';

const queryCatalog = `
query {
  myCatalogCollection (limit: 1) {
    items {
      name
      pdf {
        url
      }
    }
  }
}
`;

export interface CatalogInterface {
  name: string;
  pdf: {
    url: string;
  };
}

interface CatalogResponse {
  myCatalogCollection: {
    items: CatalogInterface[];
  };
}

export async function fetchCatalog(): Promise<CatalogInterface> {
  const response: CatalogResponse = await fetchContentful(queryCatalog);
  return response.myCatalogCollection.items[0];
}
