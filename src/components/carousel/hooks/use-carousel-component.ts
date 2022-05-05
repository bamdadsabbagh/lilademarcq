/* eslint-disable import/no-unresolved */

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import 'photoswipe/dist/photoswipe.css';
// @ts-expect-error: TS2307
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import {CAROUSEL_INTERVAL} from '../../../constants';
import {CarouselComponentProps, CarouselImage} from '../carousel.component';
import {buildNextImageUrl} from '../../../utils/build-next-image-url';

interface UseCarouselComponent {
  viewportRef: React.Ref<HTMLDivElement>;
  index: number;
  canZoom: boolean;
  handleClick: () => void;
  getMediaByIndex: (index: number) => CarouselImage;
  slidesInView: number[];
  prevBtnEnabled: boolean;
  nextBtnEnabled: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
}

export function useCarouselComponent({
  slides,
  isLightbox,
}: CarouselComponentProps): UseCarouselComponent {
  const autoplay = useRef(
    Autoplay(
      {
        delay: CAROUSEL_INTERVAL * 1000,
        stopOnInteraction: false,
      },
      (emblaRoot) => emblaRoot.parentElement,
    ),
  );

  const getMediaByIndex = useCallback((index: number) => slides[index % slides.length], [slides]);

  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    loop: true,
  }, [autoplay.current]);

  const [slidesInView, setSlidesInView] = useState([]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [index, setIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (!embla) {
      return;
    }
    embla.scrollPrev();
    autoplay.current.reset();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (!embla) {
      return;
    }
    embla.scrollNext();
    autoplay.current.reset();
  }, [embla]);

  const [isScrolling, setIsScrolling] = useState(false);

  const onScroll = useCallback(() => {
    setIsScrolling(true);
  }, []);

  const onSettle = useCallback(() => {
    setIsScrolling(false);
  }, []);

  const onSelect = useCallback(() => {
    if (!embla) {
      return;
    }
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
    setIndex(embla.slidesInView(true)[0]);
  }, [embla]);

  const findSlidesInView = useCallback(() => {
    if (!embla) {
      return;
    }

    setSlidesInView((slidesInView) => {
      if (slidesInView.length === embla.slideNodes().length) {
        embla.off('select', findSlidesInView);
      }
      const inView = embla
        .slidesInView(true)
        .filter((index) => slidesInView.indexOf(index) === -1);
      return slidesInView.concat(inView);
    });
  }, [embla, setSlidesInView]);

  useEffect(() => {
    if (!embla) {
      return;
    }

    onSelect();
    findSlidesInView();

    embla.on('select', onSelect);
    embla.on('select', findSlidesInView);
    embla.on('scroll', onScroll);
    embla.on('settle', onSettle);

    return () => {
      embla.off('select', onSelect);
      embla.off('select', findSlidesInView);
      embla.off('scroll', onScroll);
      embla.off('settle', onSettle);
    };
  }, [embla, onSelect, findSlidesInView, onScroll, onSettle]);

  const [lightbox, setLightbox] = useState();

  useEffect(() => {
    if (!isLightbox) {
      return;
    }

    const lightbox = new PhotoSwipeLightbox({
      dataSource: slides.map((image) => ({
        src: buildNextImageUrl(image.src),
        width: image.width,
        height: image.height,
      })),
      showHideAnimationType: 'none',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.init();

    lightbox.on('beforeOpen', () => {
      autoplay.current.stop();
    });

    lightbox.on('close', () => {
      embla.scrollTo(lightbox.pswp.currSlide.index);
      autoplay.current.play();
    });

    setLightbox(lightbox);

    return () => {
      lightbox.destroy();
      setLightbox(null);
    };
  }, [isLightbox, slides, embla]);

  const canZoom = useMemo(() => !isScrolling && typeof lightbox !== 'undefined', [isScrolling, lightbox]);

  const handleClick = useCallback(() => {
    if (!canZoom) {
      return;
    }

    // @ts-expect-error TS2339
    lightbox.loadAndOpen(index);
  }, [canZoom, index, lightbox]);

  return {
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
  };
}
