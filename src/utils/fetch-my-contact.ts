import shuffle from 'just-shuffle';
import {LDImage, LDText} from './fetch-object';
import {fetchContentful} from './fetch-contentful';
import {querySeo} from './query-seo';

interface LDQuote {
  author: string;
  job: string;
  body: LDText;
}

export interface LDMyContact {
  seoTitle?: string;
  seoDescription?: string;
  seoImage?: LDImage;
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
      ${querySeo}
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

export async function fetchMyContact(): Promise<LDMyContact> {
  const response: ContactResponse = await fetchContentful(queryContact);
  const myQuotes = response.myContactCollection.items[0];

  myQuotes.quotesCollection.items = shuffle(myQuotes.quotesCollection.items)
    .slice(0, 4);

  return myQuotes;
}
