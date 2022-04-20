import {StaticImageData} from 'next/image';
import {useImageSource} from '../../../hooks/use-image-source';
import {CarouselImage} from '../carousel.component';
import {UseIncrements, useIncrements} from './use-increments';

interface UseCarouselComponent {
  loading: boolean;
  sources: StaticImageData[];
  previousIndex: UseIncrements['previousIndex'];
  index: UseIncrements['index'];
  nextIndex: UseIncrements['nextIndex'];
  handleClick: UseIncrements['handleClick'];
  select: UseIncrements['select'];
}

export function useCarouselComponent(images: CarouselImage[]): UseCarouselComponent {
  const [sources, loading] = useImageSource(images.map(({image}) => image));
  const {
    previousIndex,
    index,
    nextIndex,
    select,
    handleClick,
  } = useIncrements(images.length);

  return {
    loading,
    sources,
    previousIndex,
    index,
    nextIndex,
    select,
    handleClick,
  };
}
