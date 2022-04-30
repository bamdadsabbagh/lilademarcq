import React, {ReactElement} from 'react';
import Image from 'next/image';
import {Container} from './hero.component.styles';
import {LDImage} from '../../utils/fetch-object';
import {
  ImageFeaturesComponent,
} from '../image-features/image-features.component';

interface HeroComponentProps {
  images: LDImage[];
}

export function HeroComponent({
  images,
}: HeroComponentProps): ReactElement {
  return (
    <>
      <Container>
        <Image
          src={images[0].url}
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          blurDataURL={images[0].base64}
        />

        <ImageFeaturesComponent
          isReverse
          hasFooter
          isBig
          images={images}
          currentIndex={1}
          dotCallback={() => undefined}
        />
      </Container>
    </>
  );
}
