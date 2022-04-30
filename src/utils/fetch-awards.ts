import {fetchContentful} from './fetch-contentful';
import {LDText} from './fetch-object';
import {getPlaceholder} from './get-placeholder';

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
    base64: string;
  };
  body: LDText;
}

interface AwardResponse {
  awardCollection: {
    items: LDAward[];
  };
}

export async function fetchAwards(): Promise<LDAward[]> {
  const response: AwardResponse = await fetchContentful(queryAwards);

  const awards = response.awardCollection.items;
  awards.sort((a, b) => a.position - b.position);

  await Promise.all(awards.map(async (award) => {
    award.image.base64 = await getPlaceholder(award.image.url);
  }));

  return awards;
}
