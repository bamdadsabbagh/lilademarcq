import {useEffect} from 'react';
import {preloadImage} from '../../../utils/preload-image';
import {buildNextImageUrl} from '../../../utils/build-next-image-url';
import {LDImage} from '../../../utils/fetch-object';

interface UsePreloadImagesProps {
  images: LDImage[];
  index: number;
  nextIndex: number;
  previousIndex: number;
}

export function usePreloadImages({
  images,
  index,
  nextIndex,
  previousIndex,
}: UsePreloadImagesProps): void {
  useEffect(() => {
    (async () => {
      // wait for current index
      const isReady = await preloadImage(buildNextImageUrl(images[index].url));

      // load previous and next images
      if (isReady) {
        await preloadImage(buildNextImageUrl(images[previousIndex].url));
        await preloadImage(buildNextImageUrl(images[nextIndex].url));
      }
    })();
  }, [images, index, previousIndex, nextIndex]);
}
