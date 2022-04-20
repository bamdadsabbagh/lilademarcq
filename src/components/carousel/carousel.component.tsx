import React, {ReactElement, useCallback, useState} from 'react';
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
} from './carousel.styles';
import {useImageSource} from '../../hooks/use-image-source';

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
  const [sources, loading] = useImageSource(images.map(({image}) => image));
  const [index, setIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(images.length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  const incrementNextIndex = useCallback((i) => {
    setNextIndex(i + 2 >= images.length ? 0 : i + 2);
  }, [images.length]);

  const increment = useCallback(() => {
    if (index === images.length - 1) {
      setPreviousIndex(images.length - 1);
      setIndex(0);
      setNextIndex(1);
      return;
    }

    setPreviousIndex(index);
    setIndex((i) => i + 1);
    incrementNextIndex(index);
  }, [index, images.length, incrementNextIndex]);

  const decrementPreviousIndex = useCallback((i) => {
    setPreviousIndex(i - 2 <= -1 ? images.length - 1 : i - 2);
  }, [images.length]);

  const decrement = useCallback(() => {
    if (index === 0) {
      setPreviousIndex(images.length - 2);
      setIndex(images.length - 1);
      setNextIndex(0);
      return;
    }

    decrementPreviousIndex(index);
    setIndex((i) => i - 1);
    setNextIndex(index);
  }, [index, images.length, decrementPreviousIndex]);

  const select = useCallback((i) => {
    if (i === index) {
      return;
    }

    decrementPreviousIndex(i);
    setIndex(i);
    incrementNextIndex(i);
  }, [index, incrementNextIndex, decrementPreviousIndex]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLImageElement;
    const x = e.nativeEvent.offsetX;
    const width = target.width;

    const delta = x - width * 0.5;

    if (delta >= 0) {
      increment();
    } else {
      decrement();
    }
  }, [decrement, increment]);

  return (
    <>
      {!loading && (
        <Container>
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

            <ImageCurrent onClick={handleClick}>
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
                {images[index].caption || ' '}
              </span>
            </Caption>
          </Features>
        </Container>
      )}
    </>
  );
}
