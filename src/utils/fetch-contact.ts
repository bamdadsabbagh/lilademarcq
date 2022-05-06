import shuffle from 'just-shuffle';
import {LDText} from './fetch-object';
import {fetchContentful} from './fetch-contentful';

interface LDQuote {
  author: string;
  job: string;
  body: LDText;
}

export interface LDMyContact {
  title: string;
  formTitle: string;
  quotesCollection: {
    items: LDQuote[];
  };
}

const queryContact = `
query {
  myContactCollection (limit: 1) {
    items {
      title
      formTitle
      quotesCollection {
        items {
          author
          job
          body {
            json
          }
        }
      }
    }
  }
}
`;

interface ContactResponse {
  myContactCollection: {
    items: LDMyContact[];
  };
}

export async function fetchContact(): Promise<LDMyContact> {
  const response: ContactResponse = await fetchContentful(queryContact);
  const myQuotes = response.myContactCollection.items[0];

  myQuotes.quotesCollection.items = shuffle(myQuotes.quotesCollection.items)
    .slice(0, 4);

  return myQuotes;
}
