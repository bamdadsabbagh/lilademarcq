/* eslint-disable import/no-unresolved,@typescript-eslint/ban-ts-comment */

import React, {ReactElement, useEffect} from 'react';
import 'photoswipe/dist/photoswipe.css';
// @ts-ignore
import Lightbox from 'photoswipe/lightbox';
import Image from 'next/image';
import {LDImage} from '../../../../utils/fetch-object';
import {
  buildNextImageUrl,
  NextImageWidths,
} from '../../../../utils/build-next-image-url';
import {buildImagePlaceholder} from '../../../../utils/build-image-placeholder';
import {
  BadgeContainer,
  NativeContainer,
  NativeImage,
  Placeholder,
} from './gallery.styles';

interface GalleryComponentProps {
  galleryID: string;
  images: LDImage[];
  index: number;
  badge?: string;
  native?: boolean;
}

export function GalleryComponent({
  galleryID,
  images,
  index,
  badge,
  native = false,
}: GalleryComponentProps): ReactElement {
  useEffect(() => {
    let lightbox = new Lightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [galleryID]);

  return (
    <>
      <span id={galleryID}>
        {images.map((image, i) => (
          <a
            href={buildNextImageUrl(image.url, NextImageWidths.xl, 95)}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={image.url}
            target="_blank"
            rel="noreferrer"
            style={{display: i !== index ? 'none' : 'flex'}}
          >
            <>

              {native ? (
                <NativeContainer>
                  <NativeImage
                    src={buildNextImageUrl(image.url, NextImageWidths.xl, 80)}
                    alt=""
                    width={image.width}
                    height={image.width * 0.5625}
                  />
                  <Placeholder>
                    <img
                      alt=""
                      aria-hidden
                      src={buildImagePlaceholder(image.width, image.width * 0.5625)}
                    />
                  </Placeholder>
                </NativeContainer>
              ) : (
                <Image
                  src={image.url}
                  alt={image.title}
                  objectFit="cover"
                  width={image.width}
                  height={image.width * 0.5625}
                  quality={60}
                />
              )}

              {badge && (
                <BadgeContainer>
                  <Image
                    src={badge}
                    alt=""
                    layout="fixed"
                    objectFit="cover"
                    width={120}
                    height={120}
                  />
                </BadgeContainer>
              )}
            </>
          </a>
        ))}
      </span>
    </>
  );
}
