import Image from 'next/image';
import React from 'react';
import {LDBadge} from '../../utils/fetch-object';
import {CarouselFeaturesComponent} from '../carousel-features/carousel-features.component';
import {
  Badge,
  Embla,
  EmblaButtonNext,
  EmblaButtonPrev,
  EmblaContainer,
  EmblaSlide,
  EmblaSlideInner,
  EmblaViewport,
  Features,
} from './carousel.component.styles';
import {useCarouselComponent} from './hooks/use-carousel-component';

export interface CarouselImage {
  src: string;
  alt: string;
  base64: string;
  width: number;
  height: number;
}

export interface CarouselComponentProps {
  slides: CarouselImage[];
  height?: number;
  isLightbox?: boolean;
  isFooter?: boolean;
  badge?: LDBadge;
  hasCaptions?: boolean;
  hasArrows?: boolean;
}

export function CarouselComponent({
  slides,
  height,
  isLightbox = false,
  isFooter = false,
  badge,
  hasCaptions = false,
  hasArrows = false,
}: CarouselComponentProps): JSX.Element {
  const {
    viewportRef,
    index,
    canZoom,
    prevBtnEnabled,
    nextBtnEnabled,
    scrollPrev,
    scrollNext,
    handleClick,
    getMediaByIndex,
    slidesInView,
  } = useCarouselComponent({slides, isLightbox});

  return (
    <Embla height={height}>
      <EmblaViewport
        ref={viewportRef}
        onClick={handleClick}
        isCursor={canZoom}
      >
        <EmblaContainer>
          {slides.map((_, key) => {
            const image = getMediaByIndex(key);
            const inView = slidesInView.indexOf(key) > -1;

            return (
              <EmblaSlide
                key={image.src}
                hasLoaded={inView}
              >
                <EmblaSlideInner hasLoaded={inView}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    objectFit="cover"
                    width={image.width}
                    height={image.width * 0.5625}
                    placeholder="blur"
                    blurDataURL={image.base64}
                    priority={inView}
                  />
                </EmblaSlideInner>
              </EmblaSlide>
            );
          })}
        </EmblaContainer>
      </EmblaViewport>

      {hasArrows && (
        <EmblaButtonPrev
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <svg viewBox="137.718 -1.001 366.563 644">
            <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
          </svg>
        </EmblaButtonPrev>
      )}

      {hasArrows && (
        <EmblaButtonNext
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <svg viewBox="0 0 238.003 238.003">
            <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
          </svg>
        </EmblaButtonNext>
      )}

      <Features>
        <CarouselFeaturesComponent
          hasFooter={isFooter}
          captions={hasCaptions ? slides.map((image) => image.alt) : []}
          index={index}
        />
      </Features>

      {badge && (
        <Badge>
          <Image
            src={badge.url}
            alt=""
            layout="fixed"
            objectFit="cover"
            width={120}
            height={120}
            placeholder="blur"
            blurDataURL={badge.base64}
          />
        </Badge>
      )}
    </Embla>
  );
}
