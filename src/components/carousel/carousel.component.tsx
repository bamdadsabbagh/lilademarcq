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

export interface CarouselImage {
  // image: StaticImageData;
  image: string;
  caption?: string;
}

interface CarouselComponentProps {
  images: CarouselImage[];
}

/**
 * @see https://codesandbox.io/s/embla-carousel-arrows-dots-react-z5fbs?file=/src/css/embla.css
 */
export function CarouselComponent({images}: CarouselComponentProps): ReactElement {
  const {
    loading,
    sources,
    previousIndex,
    index,
    nextIndex,
    select,
    handleClick,
  } = useCarouselComponent(images);

  return (
    <>
      {!loading && (
        <Container>
          <PointerLayer
            onClick={
              (e) => handleClick(e, sources[index])
            }
          />
          <Images>
            <ImagePrevious>
              <Image
                src={sources[previousIndex]}
                placeholder="blur"
                layout="intrinsic"
                objectFit="cover"
                width={1280}
                height={720}
                quality={95}
              />
            </ImagePrevious>

            <ImageCurrent>
              <Image
                src={sources[index]}
                placeholder="blur"
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
                src={sources[nextIndex]}
                placeholder="blur"
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
                  key={image.image}
                  active={index === key}
                  onClick={() => select(key)}
                />
              ))}
            </Dots>

            <Caption hide={typeof images[index].caption === 'undefined'}>
              <span>
                {images[index].caption || ''}
              </span>
            </Caption>
          </Features>
        </Container>
      )}
    </>
  );
}
