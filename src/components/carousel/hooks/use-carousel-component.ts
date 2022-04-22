import {UseIncrements, useIncrements} from './use-increments';
import {LDImage} from '../../../utils/fetch-objects';

interface UseCarouselComponent {
  previousIndex: UseIncrements['previousIndex'];
  index: UseIncrements['index'];
  nextIndex: UseIncrements['nextIndex'];
  handleClick: UseIncrements['handleClick'];
  select: UseIncrements['select'];
}

export function useCarouselComponent(images: LDImage[]): UseCarouselComponent {
  const {
    previousIndex,
    index,
    nextIndex,
    select,
    handleClick,
  } = useIncrements(images.length);

  return {
    previousIndex,
    index,
    nextIndex,
    select,
    handleClick,
  };
}
