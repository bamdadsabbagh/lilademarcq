import React, {ReactElement} from 'react';
import {Container, GalleryContainer} from './carousel.styles';
import {useCarouselComponent} from './hooks/use-carousel-component';
import {LDBadge, LDImage} from '../../utils/fetch-object';
import {GalleryComponent} from './components/gallery/gallery.component';
import {
  ImageFeaturesComponent,
} from '../../components/image-features/image-features.component';
import {
  ImagePointerComponent,
} from '../../components/image-pointer/image-pointer.component';
import {useInterval} from '../../hooks/use-interval';
import {CAROUSEL_INTERVAL} from '../../constants';

interface CarouselComponentProps {
  images: LDImage[];
  badge?: LDBadge;
}

/**
 * @see https://codesandbox.io/s/embla-carousel-arrows-dots-react-z5fbs?file=/src/css/embla.css
 */
export function CarouselModule({
  images,
  badge,
}: CarouselComponentProps): ReactElement {
  const {
    index,
    handleSelect,
    openTarget,
    increment,
    decrement,
  } = useCarouselComponent(images);

  useInterval(increment, CAROUSEL_INTERVAL * 1000);

  return (
    <>
      <Container>
        <ImagePointerComponent
          onClickCenter={openTarget}
          onClickLeft={decrement}
          onClickRight={increment}
          gap={30}
        />
        <GalleryContainer>
          <GalleryComponent
            galleryID="carousel"
            images={images}
            index={index}
            badge={badge}
            onSlideChange={handleSelect}
          />
        </GalleryContainer>

        <ImageFeaturesComponent
          images={images}
          index={index}
          dotCallback={handleSelect}
        />
      </Container>
    </>
  );
}
