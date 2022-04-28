import {UseIncrements, useIncrements} from './use-increments';
import {LDImage} from '../../../utils/fetch-object';

interface UseCarouselComponent {
  previousIndex: UseIncrements['previousIndex'];
  index: UseIncrements['index'];
  nextIndex: UseIncrements['nextIndex'];
  handleClick: UseIncrements['handleClick'];
  handleSelect: UseIncrements['handleSelect'];
}

export function useCarouselComponent(images: LDImage[]): UseCarouselComponent {
  const {
    previousIndex,
    index,
    nextIndex,
    handleSelect,
    handleClick,
  } = useIncrements(images.length);

  return {
    previousIndex,
    index,
    nextIndex,
    handleSelect,
    handleClick,
  };
}
