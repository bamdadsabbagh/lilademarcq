import React, {ReactElement} from 'react';
import Image from 'next/image';
import {Container} from './hero.component.styles';
import {
  ImageFeaturesComponent,
} from '../image-features/image-features.component';
import {ImagePointerComponent} from '../image-pointer/image-pointer.component';
import {RichImage} from '../../utils/fetch-hero';
import {useInfiniteArrayIndexes} from '../../hooks/use-infinite-array-indexes';
import {useInterval} from '../../hooks/use-interval';
import {CAROUSEL_INTERVAL} from '../../constants';
import {usePreloadImages} from '../../hooks/use-preload-images';

interface HeroComponentProps {
  images: RichImage[];
}

export function HeroComponent({
  images,
}: HeroComponentProps): ReactElement {
  const {
    index,
    nextIndex,
    previousIndex,
    increment,
    decrement,
  } = useInfiniteArrayIndexes(images.length);

  useInterval(increment, CAROUSEL_INTERVAL * 1000);

  usePreloadImages({
    currentUrl: images[index].image.url,
    previousUrl: images[previousIndex].image.url,
    nextUrl: images[nextIndex].image.url,
  });

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
