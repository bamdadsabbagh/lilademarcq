import {useEffect} from 'react';
import {UseIncrements, useIncrements} from './use-increments';
import {LDImage} from '../../../utils/fetch-object';
import {preloadImage} from '../../../utils/preload-image';
import {buildNextImageUrl} from '../../../utils/build-next-image-url';

interface UseCarouselComponent {
  previousIndex: UseIncrements['previousIndex'];
  index: UseIncrements['index'];
  nextIndex: UseIncrements['nextIndex'];
  handleSelect: UseIncrements['handleSelect'];
  openTarget: UseIncrements['openTarget'];
  increment: UseIncrements['increment'];
  decrement: UseIncrements['decrement'];
}

export function useCarouselComponent(images: LDImage[]): UseCarouselComponent {
  const {
    previousIndex,
    index,
    nextIndex,
    handleSelect,
    openTarget,
    increment,
    decrement,
  } = useIncrements(images.length);

  useEffect(() => {
    (async () => {
      const isReady = await preloadImage(buildNextImageUrl(images[index].url));
      if (isReady) {
        await preloadImage(buildNextImageUrl(images[previousIndex].url));
        await preloadImage(buildNextImageUrl(images[nextIndex].url));
      }
    })();
  }, [images, index, previousIndex, nextIndex]);

  return {
    previousIndex,
    index,
    nextIndex,
    handleSelect,
    openTarget,
    increment,
    decrement,
  };
}
