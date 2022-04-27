/* eslint-disable import/no-unresolved,@typescript-eslint/ban-ts-comment */

import React, {ReactElement, useEffect, useState} from 'react';
import 'photoswipe/dist/photoswipe.css';
// @ts-ignore
import Lightbox from 'photoswipe/lightbox';
import Image from 'next/image';
import styled from 'styled-components';
import {LDImage} from '../../../../utils/fetch-object';
import {
  buildNextImageUrl,
  NextImageWidths,
} from '../../../../utils/build-next-image-url';
import {buildImagePlaceholder} from '../../../../utils/build-image-placeholder';

const NativeContainer = styled.span`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: relative;
  max-width: 100%;
`;

const Placeholder = styled.span`
  box-sizing: border-box;
  display: block;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  max-width: 100%;

  > img {
    display: block;
    max-width: 100%;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0;
    margin: 0;
    padding: 0;
  }
`;

const NativeImage = styled.img`
  //width: 100%;
  //height: 100%;
  //object-fit: cover;

  position: absolute;
  inset: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  display: block;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const NextImage = styled(Image)`
  //display: none;
`;

interface GalleryComponentProps {
  galleryID: string;
  images: LDImage[];
  index: number;
}

export function GalleryComponent({
  galleryID,
  images,
  index,
}: GalleryComponentProps): ReactElement {
  const [native] = useState(true);

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
            {/* thumbnail */}
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
              <NextImage
                src={image.url}
                alt={image.title}
                layout="intrinsic"
                objectFit="cover"
                width={image.width * 0.5}
                height={image.width * 0.5 * 0.5625}
                quality={60}
              />
            )}
          </a>
        ))}
      </span>
    </>
  );
}
