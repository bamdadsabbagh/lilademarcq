import {LDText} from './fetch-object';
import {fetchContentful} from './fetch-contentful';
import {getPlaceholder} from './get-placeholder';
import {IMAGE_SETTINGS} from '../constants';

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
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.highRes},
        })
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

  myQuotes.quotesCollection.items = myQuotes.quotesCollection.items
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return myQuotes;
}
