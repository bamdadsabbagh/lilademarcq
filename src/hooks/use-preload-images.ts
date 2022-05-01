import {useEffect} from 'react';
import {preloadImage} from '../utils/preload-image';
import {buildNextImageUrl} from '../utils/build-next-image-url';

interface UsePreloadImagesProps {
  currentUrl: string;
  nextUrl: string;
  previousUrl: string;
}

export function usePreloadImages({
  currentUrl,
  nextUrl,
  previousUrl,
}: UsePreloadImagesProps): void {
  useEffect(() => {
    (async () => {
      // wait for current index
      const isReady = await preloadImage(buildNextImageUrl(currentUrl));

      // load previous and next images
      if (isReady) {
        await preloadImage(buildNextImageUrl(previousUrl));
        await preloadImage(buildNextImageUrl(nextUrl));
      }
    })();
  }, [currentUrl, previousUrl, nextUrl]);
}
