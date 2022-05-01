import React, {ReactElement} from 'react';
import Image from 'next/image';
import {Container} from './hero.component.styles';
import {
  ImageFeaturesComponent,
} from '../image-features/image-features.component';
import {ImagePointerComponent} from '../image-pointer/image-pointer.component';
import {RichImage} from '../../utils/fetch-hero';
import {useInfiniteArrayIndexes} from '../../hooks/use-infinite-array-indexes';

interface HeroComponentProps {
  images: RichImage[];
}

export function HeroComponent({
  images,
}: HeroComponentProps): ReactElement {
  const {
    index,
    increment,
    decrement,
  } = useInfiniteArrayIndexes(images.length);

  return (
    <>
      <Container>
        <Image
          src={images[index].image.url}
          objectFit="cover"
          layout="fill"
          placeholder="blur"
          blurDataURL={images[index].image.base64}
        />

        <ImagePointerComponent
          gap={20}
          onClickLeft={decrement}
          onClickRight={increment}
        />

        <ImageFeaturesComponent
          isReverse
          hasFooter
          isBig
          richImages={images}
          index={index}
          dotCallback={() => undefined}
        />
      </Container>
    </>
  );
}
