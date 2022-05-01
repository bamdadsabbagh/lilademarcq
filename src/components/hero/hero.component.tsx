import React, {ReactElement} from 'react';
import Image from 'next/image';
import {Container} from './hero.component.styles';
import {LDImage} from '../../utils/fetch-object';
import {
  ImageFeaturesComponent,
} from '../image-features/image-features.component';
import {ImagePointerComponent} from '../image-pointer/image-pointer.component';

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

        <ImagePointerComponent
          gap={20}
          onClickCenter={() => console.log('center')}
          onClickLeft={() => console.log('left')}
          onClickRight={() => console.log('right')}
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
