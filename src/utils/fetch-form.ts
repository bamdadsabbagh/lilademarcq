import {fetchContentful} from './fetch-contentful';

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

export interface FormInterface {
  topicTitle: string;
  topic: string[];
  name: string;
  firstName: string;
  address: string;
  road: string;
  postcode: string;
  city: string;
  contact: string;
  email: string;
  phone: string;
  subscription: string;
  submit: string;
}

interface FormResponse {
  myFormCollection: {
    items: FormInterface[];
  };
}

export async function fetchForm(): Promise<FormInterface> {
  const response: FormResponse = await fetchContentful(queryForm);
  return response.myFormCollection.items[0];
}
