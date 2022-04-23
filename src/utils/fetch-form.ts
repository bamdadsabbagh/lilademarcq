import {fetchContentful} from './fetch-contentful';
import {FormAtom} from '../atoms/form.atom';

const queryForm = `
query {
  myFormCollection (limit: 1) {
    items {
      topicTitle
      topic
      name
      firstName
      address
      road
      postcode
      city
      contact
      email
      phone
      subscription
      submit
    }
  }
}
`;

interface FormResponse {
  myFormCollection: {
    items: FormAtom[];
  };
}

export async function fetchForm(): Promise<FormAtom> {
  const response: FormResponse = await fetchContentful(queryForm);
  return response.myFormCollection.items[0];
}
