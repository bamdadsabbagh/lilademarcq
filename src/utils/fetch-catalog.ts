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

export interface LDCatalog {
  name: string;
  pdf: {
    url: string;
  };
}

interface CatalogResponse {
  myCatalogCollection: {
    items: LDCatalog[];
  };
}

export async function fetchCatalog(): Promise<LDCatalog> {
  const response: CatalogResponse = await fetchContentful(queryCatalog);
  return response.myCatalogCollection.items[0];
}
