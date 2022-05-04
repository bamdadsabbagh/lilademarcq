import React, {ReactElement} from 'react';
import {Container} from './hero.component.styles';
import {RichImage} from '../../utils/fetch-hero';
import {CarouselComponent} from '../carousel/carousel.component';

interface HeroComponentProps {
  images: RichImage[];
}

export function HeroComponent({
  images,
}: HeroComponentProps): ReactElement {
  return (
    <>
      <Container>
        <CarouselComponent
          isFooter
          slides={images.map((image) => ({
            src: image.image.url,
            alt: image.shortDescription,
            width: image.image.width,
            height: image.image.height,
            base64: image.image.base64,
          }))}
        />
      </Container>
    </>
  );
}
