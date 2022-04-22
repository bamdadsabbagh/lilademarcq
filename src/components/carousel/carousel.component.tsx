import React, {ReactElement, useCallback} from 'react';
import Image from 'next/image';
import useMeasure from 'react-use-measure';
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

  const [ref, bounds] = useMeasure();
  const isReady = useCallback(() => bounds.width !== 0, [bounds.width]);
  const getPreviousImage = useCallback(() => images[previousIndex]?.url, [images, previousIndex]);
  const getNextImage = useCallback(() => images[nextIndex]?.url, [images, nextIndex]);

  return (
    <>
      <Container ref={ref}>
        <PointerLayer
          onClick={
            (e) => handleClick(e, images[index].url)
          }
        />
        {isReady() && (
          <Images>
            <ImagePrevious>
              {getPreviousImage() && (
                <Image
                  src={getPreviousImage()}
                  alt={images[previousIndex].title}
                  layout="intrinsic"
                  objectFit="cover"
                  width={bounds.width}
                  height={bounds.width * 0.5625}
                />
              )}
            </ImagePrevious>

            <ImageCurrent>
              <Image
                src={images[index].url}
                alt={images[index].title}
                layout="intrinsic"
                objectFit="cover"
                width={bounds.width}
                height={bounds.width * 0.5625}
                priority
              />
            </ImageCurrent>

            <ImageNext>
              {getNextImage() && (
                <Image
                  src={getNextImage()}
                  alt={images[nextIndex].title}
                  layout="intrinsic"
                  objectFit="cover"
                  width={bounds.width}
                  height={bounds.width * 0.5625}
                />
              )}
            </ImageNext>
          </Images>
        )}

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
