import {UseHandlers, useHandlers} from './use-handlers';
import {LDImage} from '../../../utils/fetch-object';
import {usePreloadImages} from './use-preload-images';
import {
  useInfiniteArrayIndexes,
} from '../../../hooks/use-infinite-array-indexes';

interface UseCarouselComponent {
  index: number;
  previousIndex: number;
  nextIndex: number;
  increment: () => void;
  decrement: () => void;
  handleSelect: UseHandlers['handleSelect'];
  openTarget: UseHandlers['openTarget'];
}

export function useCarouselComponent(images: LDImage[]): UseCarouselComponent {
  const {
    previousIndex,
    index,
    setIndex,
    nextIndex,
    increment,
    decrement,
    updatePreviousIndex,
    updateNextIndex,
  } = useInfiniteArrayIndexes(images.length);

  const {
    handleSelect,
    openTarget,
  } = useHandlers({
    index,
    setIndex,
    updateNextIndex,
    updatePreviousIndex,
  });

  usePreloadImages({
    currentUrl: images[index].url,
    nextUrl: images[nextIndex].url,
    previousUrl: images[previousIndex].url,
  });

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
