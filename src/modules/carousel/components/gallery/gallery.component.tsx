/* eslint-disable import/no-unresolved,@typescript-eslint/ban-ts-comment */

import React, {ReactElement, useCallback, useEffect} from 'react';
import 'photoswipe/dist/photoswipe.css';
// @ts-ignore
import Lightbox from 'photoswipe/lightbox';
import Image from 'next/image';
import {LDBadge, LDImage} from '../../../../utils/fetch-object';
import {buildNextImageUrl} from '../../../../utils/build-next-image-url';
import {BadgeContainer} from './gallery.styles';

interface GalleryComponentProps {
  galleryID: string;
  images: LDImage[];
  index: number;
  badge?: LDBadge;
  onSlideChange: (index: number) => void;
}

export function GalleryComponent({
  galleryID,
  images,
  index,
  badge,
  onSlideChange,
}: GalleryComponentProps): ReactElement {
  const handleSlideChange = useCallback((i) => {
    if (i === index) {
      return;
    }

    onSlideChange(i);
  }, [onSlideChange, index]);

  useEffect(() => {
    let lightbox = new Lightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      preloadFirstSlide: true,
      loop: true,
      showHideAnimationType: 'none',
    });

    lightbox.init();

    lightbox.on('contentActivate', ({content}) => {
      handleSlideChange(content.index);
    });

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
    // we don't want to run this effect every time the index changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryID]);

  return (
    <>
      <div id={galleryID}>

        {images.map((image, i) => (
          <a
            href={buildNextImageUrl(image.url)}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={image.url}
            target="_blank"
            rel="noreferrer"
            style={{display: i !== index ? 'none' : 'flex'}}
          >
            <Image
              src={image.url}
              alt={image.title}
              objectFit="cover"
              width={image.width}
              height={image.width * 0.5625}
              placeholder="blur"
              blurDataURL={image.base64}
              priority={i === 0}
            />
          </a>
        ))}

        {badge && (
          <BadgeContainer>
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
          </BadgeContainer>
        )}

      </div>
    </>
  );
}
