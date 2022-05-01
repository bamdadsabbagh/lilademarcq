import {fetchContentful} from './fetch-contentful';

const queryFormTarget = `
query {
  myFormCollection (limit: 1) {
    items {
      target
    }
  }
}
`;

interface FormTargetResponse {
  myFormCollection: {
    items: {
      target: string;
    }[];
  };
}

export async function fetchFormTarget(): Promise<string> {
  const response: FormTargetResponse = await fetchContentful(queryFormTarget);
  return response.myFormCollection.items[0].target;
}
