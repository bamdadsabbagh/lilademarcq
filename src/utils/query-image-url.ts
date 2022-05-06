import {IMAGE_SETTINGS} from '../constants';

export const queryImageUrl = (highRes = true): string => `
url(transform: { 
  format: WEBP,
  quality: ${IMAGE_SETTINGS.quality},
  width: ${highRes ? IMAGE_SETTINGS.highRes : IMAGE_SETTINGS.lowRes},
})
`;
