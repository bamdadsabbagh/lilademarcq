import {atom} from 'jotai';

export interface FormAtom {
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

export const formAtom = atom(
  (async () => {
    const response = await fetch('/api/form');
    return response.json();
  })(),
);
