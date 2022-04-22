import {fetchContentful} from './fetch-contentful';
import {RichText} from './fetch-objects';

const querySection = (slug: string) => `
query {
  sectionCollection(where: { slug: "${slug}" }, limit: 1) {
    items {
      slug
      title
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

export interface LDSection {
  slug: string;
  title: string;
  image: {
    url: string;
  };
  body: RichText;
}

interface SectionResponse {
  data: {
    sectionCollection: {
      items: LDSection[];
    };
  };
}

export async function fetchSection(slug: string): Promise<LDSection> {
  const response: SectionResponse = await fetchContentful(querySection(slug));

  if (!response.data) {
    throw new Error('No data found');
  }

  return response.data.sectionCollection.items[0];
}
