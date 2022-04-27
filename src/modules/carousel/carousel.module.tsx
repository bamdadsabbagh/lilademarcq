import React, {ReactElement} from 'react';
import {
  Caption,
  Container,
  Dot,
  Dots,
  Features,
  GalleryContainer,
  PointerLayer,
} from './carousel.styles';
import {useCarouselComponent} from './hooks/use-carousel-component';
import {LDImage} from '../../utils/fetch-object';
import {GalleryComponent} from './components/gallery/gallery.component';

interface CarouselComponentProps {
  images: LDImage[];
}

/**
 * @see https://codesandbox.io/s/embla-carousel-arrows-dots-react-z5fbs?file=/src/css/embla.css
 */
export function CarouselModule({images}: CarouselComponentProps): ReactElement {
  const {
    index,
    select,
    handleClick,
  } = useCarouselComponent(images);

  return (
    <>
      <Container>
        <PointerLayer
          onClick={
            (e) => handleClick(e, index)
          }
        />
        <GalleryContainer>
          <GalleryComponent
            galleryID="carousel"
            images={images}
            index={index}
          />
        </GalleryContainer>

        <Features>
          <Dots>
            {images.map((image, key) => (
              <Dot
                key={image.url}
                active={index === key}
                onClick={() => select(key)}
              />
            ))}
          </Dots>

          <Caption hide={typeof images[index].description === 'undefined'}>
            <span>
              {images[index].description || images[index].title || ''}
            </span>
          </Caption>
        </Features>
      </Container>
    </>
  );
}
