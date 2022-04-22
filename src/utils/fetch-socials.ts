import {fetchContentful} from './fetch-contentful';

const querySocial = `
query {
  socialCollection {
    items {
      slug
      position
      link
      image {
        url
      }
    }
  }
}
`;

export interface LDSocial {
  slug: string;
  position: number;
  link: string;
  image: {
    url: string;
  };
}

interface SocialResponse {
  data: {
    socialCollection: {
      items: LDSocial[];
    };
  };
}

export async function fetchSocials(): Promise<LDSocial[]> {
  const response: SocialResponse = await fetchContentful(querySocial);

  if (!response.data) {
    throw new Error('No data found');
  }

  const socials = response.data.socialCollection.items;
  socials.sort((a, b) => a.position - b.position);
  return socials;
}
