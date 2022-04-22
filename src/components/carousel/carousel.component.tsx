import React, {ReactElement} from 'react';
import Image from 'next/image';
import {
  Caption,
  Container,
  Dot,
  Dots,
  Features,
  ImageCurrent,
  ImageNext,
  ImagePrevious,
  Images,
  PointerLayer,
} from './carousel.styles';
import {useCarouselComponent} from './hooks/use-carousel-component';
import {LDImage} from '../../utils/fetch-objects';

export interface CarouselImage {
  image: string;
  position?: number;
  caption?: string;
}

interface CarouselComponentProps {
  images: LDImage[];
}

/**
 * @see https://codesandbox.io/s/embla-carousel-arrows-dots-react-z5fbs?file=/src/css/embla.css
 */
export function CarouselComponent({images}: CarouselComponentProps): ReactElement {
  const {
    previousIndex,
    index,
    nextIndex,
    select,
    handleClick,
  } = useCarouselComponent(images);

  return (
    <>
      <Container>
        <PointerLayer
          onClick={
            (e) => handleClick(e, images[index].url)
          }
        />
        <Images>
          <ImagePrevious>
            <Image
              src={images[previousIndex]?.url ?? images[index].url}
              // placeholder="blur"
              layout="intrinsic"
              objectFit="cover"
              width={1280}
              height={720}
              quality={95}
            />
          </ImagePrevious>

          <ImageCurrent>
            <Image
              src={images[index].url}
              // placeholder="blur"
              layout="intrinsic"
              objectFit="cover"
              width={1280}
              height={720}
              quality={95}
              priority
            />
          </ImageCurrent>

          <ImageNext>
            <Image
              src={images[nextIndex]?.url ?? images[index].url}
              // placeholder="blur"
              layout="intrinsic"
              objectFit="cover"
              width={1280}
              height={720}
              quality={95}
            />
          </ImageNext>
        </Images>

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
