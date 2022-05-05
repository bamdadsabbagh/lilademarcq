import {LDText} from './fetch-object';
import {fetchContentful} from './fetch-contentful';
import {getPlaceholder} from './get-placeholder';

interface LDQuote {
  author: string;
  job: string;
  body: LDText;
}

export interface LDMyQuotes {
  title: string;
  bannerText: string;
  bannerLink: string;
  bannerImage: {
    url: string;
    width: number;
    height: number;
    base64: string;
  };
  quotesCollection: {
    items: LDQuote[];
  };
}

const queryQuotes = `
query {
  myQuotesCollection (limit: 1) {
    items {
      title
      bannerText
      bannerLink
      bannerImage {
        url
        width
        height
      }
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

interface QuotesResponse {
  myQuotesCollection: {
    items: LDMyQuotes[];
  };
}

export async function fetchQuotes(): Promise<LDMyQuotes> {
  const response: QuotesResponse = await fetchContentful(queryQuotes);
  const myQuotes = response.myQuotesCollection.items[0];

  myQuotes.bannerImage.base64 = await getPlaceholder(myQuotes.bannerImage.url);

  return myQuotes;
}
