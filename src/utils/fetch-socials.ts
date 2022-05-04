import {fetchContentful} from './fetch-contentful';
import {IMAGE_SETTINGS} from '../constants';
import {LDImage} from './fetch-object';
import {getPlaceholder} from './get-placeholder';

const querySocial = `
query {
  socialCollection {
    items {
      slug
      position
      link
      image {
        width
        height
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.quality},
          width: ${IMAGE_SETTINGS.lowRes},
        })
      }
    }
  }
}
`;

export interface LDSocial {
  slug: string;
  position: number;
  link: string;
  image: LDImage;
}

interface SocialResponse {
  socialCollection: {
    items: LDSocial[];
  };
}

export async function fetchSocials(): Promise<LDSocial[]> {
  const response: SocialResponse = await fetchContentful(querySocial);

  const socials = response.socialCollection.items;

  await Promise.all(socials.map(async (social) => {
    social.image.base64 = await getPlaceholder(social.image.url);
  }));

  socials.sort((a, b) => a.position - b.position);

  return socials;
}
