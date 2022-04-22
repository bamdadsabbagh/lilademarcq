import {fetchContentful} from './fetch-contentful';
import {RichText} from './fetch-objects';

const queryAwards = `
query {
  awardCollection(limit: 2) {
    items {
      slug
      position
      image {
        url
      }
      body {
        json
      }
    }
  }
}
`;

export interface LDAward {
  slug: string;
  position: number;
  image: {
    url: string;
  };
  body: RichText;
}

interface AwardResponse {
  data: {
    awardCollection: {
      items: LDAward[];
    };
  };
}

export async function fetchAwards(): Promise<LDAward[]> {
  const response: AwardResponse = await fetchContentful(queryAwards);

  if (!response.data) {
    throw new Error('No data found');
  }

  const awards = response.data.awardCollection.items;

  awards.sort((a, b) => a.position - b.position);

  return awards;
}
