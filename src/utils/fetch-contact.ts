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
  myQuotesCollection (limit: 1) {
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
  myQuotesCollection: {
    items: LDMyContact[];
  };
}

export async function fetchContact(): Promise<LDMyContact> {
  const response: ContactResponse = await fetchContentful(queryContact);
  const myQuotes = response.myQuotesCollection.items[0];

  myQuotes.quotesCollection.items = myQuotes.quotesCollection.items
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return myQuotes;
}
