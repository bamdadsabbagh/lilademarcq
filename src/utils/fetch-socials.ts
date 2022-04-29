import {fetchContentful} from './fetch-contentful';
import {IMAGE_SETTINGS} from '../constants';
import {LDImage} from './fetch-object';

const querySocial = `
query {
  socialCollection {
    items {
      slug
      position
      link
      image {
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

const querySocialThumbnail = `
query {
  socialCollection {
    items {
      image {
        url(transform: { 
          format: WEBP,
          quality: ${IMAGE_SETTINGS.thumbQuality},
          width: ${Math.round(IMAGE_SETTINGS.lowRes * IMAGE_SETTINGS.thumbRatio)},
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
  const responseThumbnail: SocialResponse = await fetchContentful(querySocialThumbnail);

  const socials = response.socialCollection.items;

  socials.forEach((social, index) => {
    social.image.base64 = responseThumbnail.socialCollection.items[index].image.url;
  });

  socials.sort((a, b) => a.position - b.position);

  return socials;
}
